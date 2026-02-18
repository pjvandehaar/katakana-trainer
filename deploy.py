#!/usr/bin/env python3

import argparse
import base64
import re
import subprocess as subp
from pathlib import Path

def run_cmd(cmd: list[str]) -> None:
    print('=>', ' '.join(cmd))
    subp.run(cmd, check=True)

def main():
    parser = argparse.ArgumentParser(description="Build and deploy the Katakana Trainer to petervh.com and to github-pages.")
    parser.add_argument("--scp", action="store_true", help="Deploy the file using scp.")
    args = parser.parse_args()

    print('=> Making /docs/ ...')
    if Path('./docs').is_dir(): run_cmd(['rm', '-r', './docs/'])
    run_cmd(['npx', 'vite', 'build', '--base=./', '--outDir=docs/'])
    print()
    # A. Make /docs/index.html etc for github-pages
    # if Path('./docs').is_dir(): run_cmd(['rm', '-r', './docs/'])
    # run_cmd(['cp', '-r', './dist', './docs'])
    # html_content = Path('docs/index.html').read_text()
    # html_content = re.sub('href="/', 'href="./"', html_content)
    # html_content = re.sub('src="/', 'src="./"', html_content)
    # Path('docs/index.html').write_text(html_content)
    # print("=> Made paths relative in docs/index.html")

    print("=> Making 1.html ...")
    dist_dir = Path('dist')
    assets_dir = dist_dir / 'assets'

    print("Building the project...")
    run_cmd(['npm', 'run', 'build'])
    html_content = (dist_dir / 'index.html').read_text()

    # Find and inline CSS
    css_files = list(assets_dir.glob('*.css'))
    if css_files:
        assert len(css_files) == 1, css_files
        css_content = css_files[0].read_text()
        # Use lambda to avoid backslash escape issues in re.sub
        html_content = re.sub(
            r'<link rel="stylesheet"[^>]+href="/assets/[^"]+"[^>]*>',
            lambda _: f'<style>\n{css_content}\n</style>',
            html_content
        )

    # Find and inline JS
    js_files = list(assets_dir.glob('*.js'))
    if js_files:
        assert len(js_files) == 1, js_files
        js_content = js_files[0].read_text()
        # Use lambda to avoid backslash escape issues in re.sub
        html_content = re.sub(
            r'<script[^>]+src="/assets/[^"]+"[^>]*></script>',
            lambda _: f'<script type="module">\n{js_content}\n</script>',
            html_content
        )

    # Inline Favicon (SVG to Data URI)
    favicon_path = dist_dir / 'favicon.svg'
    if favicon_path.exists():
        svg_content = favicon_path.read_text()
        encoded = base64.b64encode(svg_content.encode('utf-8')).decode('utf-8')
        data_uri = f"data:image/svg+xml;base64,{encoded}"
        html_content = re.sub(
            r'<link rel="icon"[^>]+href="/favicon\.svg"[^>]*>',
            lambda _: f'<link rel="icon" type="image/svg+xml" href="{data_uri}">',
            html_content
        )

    # Save as 1.html
    Path('1.html').write_text(html_content)
    print("Created 1.html successfully.")

    # Optionally scp
    if args.scp:
        run_cmd(['scp', '1.html', 'petervh:/var/www/html/tmp/katakana-trainer/index.html'])
    else:
        print('=> Not deploying.  Pass --scp to actually deploy.')


if __name__ == "__main__":
    main()
