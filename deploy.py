#!/usr/bin/env python3

from pathlib import Path
import subprocess as subp

def run_cmd(cmd: list[str]) -> None:
    print('=>', cmd)
    subp.run(cmd)

html = Path('index.html').read_text()
script = Path('script.js').read_text()

new_html = html.replace('<script src="script.js"></script>', f'<script type="text/javascript">{script}</script>')
Path('1.html').write_text(new_html)

run_cmd(['scp', '1.html', 'petervh:/var/www/html/tmp/katakana-trainer/index.html'])
