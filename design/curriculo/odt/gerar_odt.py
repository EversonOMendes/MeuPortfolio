import sys
import zipfile
from pathlib import Path
from xml.sax.saxutils import escape

PASTA = Path(__file__).parent
SAIDA = Path(sys.argv[1]) if len(sys.argv) > 1 else PASTA.parents[2] / 'public/assets/curriculo/everson-mendes-curriculo.odt'

CONTATOS = [
    [
        ('telefone', '+55 (43) 9 8445-8966', 'https://wa.me/5543984458966'),
        ('email', 'eversonmendes301@gmail.com', 'mailto:eversonmendes301@gmail.com'),
        ('local', 'Porto Alegre, RS', None),
    ],
    [
        ('linkedin', 'linkedin.com/in/eversonmendes301', 'https://www.linkedin.com/in/eversonmendes301'),
        ('github', 'github.com/eversonomendes', 'https://github.com/eversonomendes'),
    ],
    [('site', 'eversonomendes.github.io/MeuPortfolio', 'https://eversonomendes.github.io/MeuPortfolio/')],
]

RESUMO = (
    'Desenvolvedor Full Stack especializado em C#/.NET e Angular. Na InterOp, atuo com liderança '
    'técnica de projetos e orientação do time, com trajetória de analista de suporte a sênior. '
    'Fundador da Msul Sistemas, onde concebo, desenvolvo e opero uma plataforma SaaS com três produtos '
    '(SmartChat, SmartERP e SmartShop), cuidando de arquitetura, back-end, front-end, integrações e '
    'infraestrutura.'
)

EXPERIENCIAS = [
    {
        'empresa': 'Msul Sistemas',
        'complemento': 'Mendes Sul Sistemas',
        'meta': ('msulsistemas.com.br', 'https://www.msulsistemas.com.br/'),
        'cargos': [
            {
                'titulo': 'Fundador · Full Stack Developer',
                'periodo': 'Jun 2025 - Atual',
                'texto': 'Concepção, desenvolvimento e operação de uma plataforma SaaS com três produtos: '
                'SmartChat (atendimento via WhatsApp com IA), SmartERP (ERP com PDV e NF-e) e '
                'SmartShop (loja online com Pix).',
                'itens': [
                    'API em ASP.NET Core 9 com Clean Architecture e EF Core 9 sobre MySQL.',
                    'Arquitetura multi-tenant com estratégias por produto (SmartChat e SmartShop).',
                    'Atendimento via API Oficial do WhatsApp (Meta) com automações e respostas assistidas por IA (Claude, da Anthropic).',
                    'Pagamentos via Pix com notificação em tempo real (SignalR) e jobs agendados para cobranças, renovação de planos e backups.',
                    'Segurança com JWT assinado por chaves RSA, 2FA e rate limiting.',
                    'Testes com xUnit e Moq, CI no GitHub Actions e deploy em servidor Linux, com mais de 760 commits.',
                ],
                'stack': 'C#, .NET 9, ASP.NET Core, EF Core, MySQL, Angular, SignalR, IA (Claude), GitHub Actions, Linux',
            }
        ],
    },
    {
        'empresa': 'InterOp',
        'complemento': None,
        'meta': ('interop.com.br · Porto Alegre, RS · Híbrido', 'https://interop.com.br/'),
        'cargos': [
            {
                'titulo': 'Full Stack Developer · Sênior',
                'periodo': 'Dez 2023 - Atual',
                'itens': [
                    'Liderança técnica de projetos e orientação de desenvolvedores da equipe.',
                    'Desenvolvimento full stack com C# e ASP.NET MVC no back-end e Angular/AngularJS com Angular Material no front-end.',
                    'Modelagem de dados, consultas e manutenção em Microsoft SQL Server.',
                    'Pipelines de integração e entrega contínuas (CI/CD) no GitLab.',
                ],
            },
            {
                'titulo': 'Full Stack Developer · Pleno',
                'periodo': 'Jan 2023 - Dez 2023',
                'itens': [
                    'Novas funcionalidades em C# com front-end em JavaScript, HTML5, CSS, AngularJS e Angular Material.',
                    'Consultas e manutenção de dados em SQL. Promovido a sênior ao fim do período.',
                ],
            },
            {
                'titulo': 'Analista de Suporte',
                'periodo': 'Nov 2022 - Jan 2023',
                'itens': [
                    'Desenvolvimento de uma ferramenta interna para suporte e atendimento ao cliente.',
                    'Monitoramento de servidores, cadastro de usuários no Active Directory e suporte aos sistemas dos clientes. Promovido a desenvolvedor pleno.',
                ],
            },
        ],
    },
]

COMPETENCIAS = [
    ('Back-end', ['C#', '.NET 9', 'ASP.NET Core', 'ASP.NET MVC', 'EF Core', 'SignalR', 'Node.js']),
    ('Front-end', ['Angular', 'AngularJS', 'TypeScript', 'JavaScript', 'Angular Material', 'HTML5', 'CSS']),
    ('Dados', ['SQL Server', 'MySQL']),
    ('DevOps & qualidade', ['Docker', 'Git', 'GitHub Actions', 'GitLab CI/CD', 'Linux', 'xUnit', 'Moq']),
    ('Arquitetura & integrações', ['Clean Architecture', 'Multi-tenant', 'WhatsApp API (Meta)', 'Pix', 'IA (Claude)', 'JWT / 2FA']),
]

FORMACAO = [
    ('Análise e Desenvolvimento de Sistemas', 'Universidade Estácio', '2023 - 2025', None),
    ('Técnico em Informática', 'Senac - RS', '2014 - 2016', None),
]

CERTIFICACOES = [
    (
        'Foundational C# with Microsoft',
        'freeCodeCamp e Microsoft',
        'Set 2026',
        'https://www.freecodecamp.org/certification/fcc956638ed-74a0-422d-b89d-98482bd9ad2a/foundational-c-sharp-with-microsoft',
    ),
    ('Junior Angular Developer', 'Certificates.dev', 'Em preparação', None),
]

FONTES = {
    'Figtree': ['Figtree-Regular.ttf', 'Figtree-Bold.ttf'],
    'Figtree SemiBold': ['Figtree-SemiBold.ttf'],
    'Outfit': ['Outfit-Bold.ttf'],
    'Outfit Medium': ['Outfit-Medium.ttf'],
    'Outfit ExtraBold': ['Outfit-ExtraBold.ttf'],
}

IMAGENS = ['foto-redonda.png', 'fundo-cabecalho.png'] + [
    f'icone-{n}.png' for n in ('telefone', 'email', 'local', 'linkedin', 'github', 'site')
]

NS = (
    'xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" '
    'xmlns:style="urn:oasis:names:tc:opendocument:xmlns:style:1.0" '
    'xmlns:text="urn:oasis:names:tc:opendocument:xmlns:text:1.0" '
    'xmlns:table="urn:oasis:names:tc:opendocument:xmlns:table:1.0" '
    'xmlns:draw="urn:oasis:names:tc:opendocument:xmlns:drawing:1.0" '
    'xmlns:fo="urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0" '
    'xmlns:xlink="http://www.w3.org/1999/xlink" '
    'xmlns:svg="urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0" '
    'xmlns:config="urn:oasis:names:tc:opendocument:xmlns:config:1.0" '
    'xmlns:loext="urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0" '
    'office:version="1.3"'
)


def t(texto):
    return escape(texto).replace('  ', ' <text:s/>')


def span(estilo, texto):
    return f'<text:span text:style-name="{estilo}">{t(texto)}</text:span>'


def link(url, conteudo):
    return (
        f'<text:a xlink:type="simple" xlink:href="{escape(url)}" text:style-name="Link" '
        f'text:visited-style-name="Link">{conteudo}</text:a>'
    )


def p(estilo, conteudo=''):
    return f'<text:p text:style-name="{estilo}">{conteudo}</text:p>'


def imagem(nome, largura_mm, estilo='Imagem'):
    return (
        f'<draw:frame draw:style-name="{estilo}" text:anchor-type="as-char" '
        f'svg:width="{largura_mm}mm" svg:height="{largura_mm}mm" draw:z-index="1">'
        f'<draw:image xlink:href="Pictures/{nome}" xlink:type="simple" xlink:show="embed" xlink:actuate="onLoad"/>'
        '</draw:frame>'
    )


def fontes_decl():
    itens = []
    for nome, arquivos in FONTES.items():
        uris = ''.join(
            f'<svg:font-face-uri xlink:href="Fonts/{a}" xlink:type="simple">'
            '<svg:font-face-format svg:string="truetype"/></svg:font-face-uri>'
            for a in arquivos
        )
        itens.append(
            f'<style:font-face style:name="{nome}" svg:font-family="&apos;{nome}&apos;" '
            f'style:font-family-generic="swiss" style:font-pitch="variable">'
            f'<svg:font-face-src>{uris}</svg:font-face-src></style:font-face>'
        )
    return '<office:font-face-decls>' + ''.join(itens) + '</office:font-face-decls>'


def estilo_p(nome, texto='', paragrafo='', pai='Padrao'):
    pai_attr = f' style:parent-style-name="{pai}"' if pai and nome != pai else ''
    return (
        f'<style:style style:name="{nome}" style:display-name="{nome}" style:family="paragraph"{pai_attr}>'
        f'<style:paragraph-properties {paragrafo}/>'
        f'<style:text-properties {texto}/></style:style>'
    )


def estilo_t(nome, texto):
    return f'<style:style style:name="{nome}" style:family="text"><style:text-properties {texto}/></style:style>'


TAB = '<style:tab-stops><style:tab-stop style:position="112.6mm" style:type="right"/></style:tab-stops>'


def estilo_p_tab(nome, texto, paragrafo):
    return (
        f'<style:style style:name="{nome}" style:display-name="{nome}" style:family="paragraph" '
        f'style:parent-style-name="Padrao"><style:paragraph-properties {paragrafo}>{TAB}'
        f'</style:paragraph-properties><style:text-properties {texto}/></style:style>'
    )


def styles_xml():
    corpo = 'style:font-name="Figtree" fo:font-size="9.2pt" fo:color="#17171a"'
    estilos = [
        estilo_p('Padrao', corpo, 'fo:margin-top="0mm" fo:margin-bottom="0mm" fo:line-height="12.45pt"', pai=None),
        estilo_p('Nome', 'style:font-name="Outfit ExtraBold" fo:font-size="30pt" fo:color="#f4f4f5"', 'fo:line-height="100%"'),
        estilo_p('Cargo buscado', 'style:font-name="Outfit Medium" fo:font-size="13pt" fo:color="#d4d4d8"', 'fo:margin-top="2.5mm" fo:line-height="16pt"'),
        estilo_p('Contato', 'fo:font-size="8.6pt" fo:color="#c4c4cc"', 'fo:margin-top="1.2mm" fo:line-height="12pt"'),
        estilo_p('Titulo da secao', 'style:font-name="Outfit" fo:font-weight="bold" fo:font-size="10.5pt" fo:letter-spacing="0.5mm" fo:text-transform="uppercase"', 'fo:margin-top="5mm" fo:margin-bottom="2.4mm" fo:line-height="15pt" fo:keep-with-next="always"'),
        estilo_p('Resumo', 'fo:color="#3d3d44"', 'fo:text-align="justify"'),
        estilo_p_tab('Empresa', 'style:font-name="Outfit" fo:font-weight="bold" fo:font-size="12pt"', 'fo:line-height="16pt" fo:padding-bottom="1.2mm" fo:border-bottom="0.3mm solid #e4e4e8" fo:keep-with-next="always"'),
        estilo_p_tab('Cargo', 'fo:font-weight="bold"', 'fo:margin-top="2mm" fo:keep-with-next="always"'),
        estilo_p('Texto', 'fo:color="#3d3d44"', 'fo:margin-top="0.6mm"'),
        estilo_p('Item', 'fo:color="#3d3d44"', 'fo:margin-top="0.3mm"'),
        estilo_p('Stack', 'fo:font-size="8.5pt" fo:color="#6b6b74"', 'fo:margin-top="1.4mm" fo:line-height="11.7pt"'),
        estilo_p('Grupo', 'fo:font-weight="bold" fo:font-size="8.5pt" fo:color="#6b6b74" fo:letter-spacing="0.2mm" fo:text-transform="uppercase"', 'fo:margin-top="2.4mm" fo:margin-bottom="1mm" fo:keep-with-next="always"'),
        estilo_p('Chips', '', 'fo:line-height="17pt"'),
        estilo_p('Formacao titulo', 'fo:font-weight="bold"', 'fo:margin-top="1.8mm"'),
        estilo_p('Formacao local', 'fo:font-size="9pt" fo:color="#3d3d44"', ''),
        estilo_p('Formacao data', 'style:font-name="Figtree SemiBold" fo:font-size="8.5pt" fo:color="#e07a10"', ''),
        estilo_t('Laranja', 'fo:color="#f28c1e"'),
        estilo_t('Barra', 'fo:color="#e07a10" fo:font-size="13pt" fo:letter-spacing="normal"'),
        estilo_t('Complemento', 'style:font-name="Figtree" fo:font-weight="normal" fo:font-size="8.5pt" fo:color="#6b6b74"'),
        estilo_t('Meta', 'style:font-name="Figtree" fo:font-weight="normal" fo:font-size="8.5pt" fo:color="#6b6b74"'),
        estilo_t('Periodo', 'style:font-name="Figtree SemiBold" fo:font-weight="normal" fo:font-size="8.5pt" fo:color="#e07a10"'),
        estilo_t('Destaque', 'style:font-name="Figtree SemiBold" fo:color="#3d3d44"'),
        estilo_t('Chip', 'style:font-name="Figtree SemiBold" fo:font-size="8.2pt" fo:color="#8a4a08" fo:background-color="#fdf1e3"'),
        estilo_t('Marcador', 'fo:color="#e07a10" fo:font-size="6pt"'),
        estilo_t('Link', 'style:text-underline-style="none"'),
        '<style:style style:name="Imagem" style:family="graphic"><style:graphic-properties '
        'style:vertical-pos="middle" style:vertical-rel="text" fo:border="none" fo:padding="0mm" '
        'style:wrap="none" draw:fill="none" draw:stroke="none"/></style:style>',
        '<text:list-style style:name="Marcadores"><text:list-level-style-bullet text:level="1" '
        'text:style-name="Marcador" text:bullet-char="●"><style:list-level-properties '
        'text:list-level-position-and-space-mode="label-alignment"><style:list-level-label-alignment '
        'text:label-followed-by="listtab" text:list-tab-stop-position="4mm" fo:text-indent="-3.4mm" '
        'fo:margin-left="4mm"/></style:list-level-properties></text:list-level-style-bullet></text:list-style>',
    ]
    return (
        f'<?xml version="1.0" encoding="UTF-8"?><office:document-styles {NS}>{fontes_decl()}'
        f'<office:styles>{"".join(estilos)}</office:styles>'
        '<office:automatic-styles><style:page-layout style:name="pm1"><style:page-layout-properties '
        'fo:page-width="210mm" fo:page-height="297mm" style:print-orientation="portrait" '
        'fo:margin-top="0mm" fo:margin-bottom="5mm" fo:margin-left="0mm" fo:margin-right="0mm"/>'
        '</style:page-layout></office:automatic-styles>'
        '<office:master-styles><style:master-page style:name="Standard" style:page-layout-name="pm1"/>'
        '</office:master-styles></office:document-styles>'
    )


def automaticos():
    return (
        '<office:automatic-styles>'
        '<style:style style:name="TCab" style:family="table"><style:table-properties style:width="210mm" '
        'table:align="left" fo:margin-left="0mm" fo:background-color="#0e0e10">'
        '<style:background-image xlink:href="Pictures/fundo-cabecalho.png" xlink:type="simple" '
        'xlink:actuate="onLoad" style:repeat="stretch"/></style:table-properties></style:style>'
        '<style:style style:name="TCab.A" style:family="table-column"><style:table-column-properties style:column-width="57mm"/></style:style>'
        '<style:style style:name="TCab.B" style:family="table-column"><style:table-column-properties style:column-width="153mm"/></style:style>'
        '<style:style style:name="TCab.L" style:family="table-row"><style:table-row-properties style:min-row-height="52mm"/></style:style>'
        '<style:style style:name="TCab.A1" style:family="table-cell"><style:table-cell-properties '
        'style:vertical-align="middle" fo:padding-left="13mm" fo:padding-right="0mm" fo:padding-top="0mm" '
        'fo:padding-bottom="0mm" fo:border="none"/></style:style>'
        '<style:style style:name="TCab.B1" style:family="table-cell"><style:table-cell-properties '
        'style:vertical-align="middle" fo:padding-left="3mm" fo:padding-right="10mm" fo:padding-top="7mm" '
        'fo:padding-bottom="6mm" fo:border="none"/></style:style>'
        '<style:style style:name="TCorpo" style:family="table"><style:table-properties style:width="184mm" '
        'table:align="left" fo:margin-left="13mm" fo:margin-top="7mm"/></style:style>'
        '<style:style style:name="TCorpo.A" style:family="table-column"><style:table-column-properties style:column-width="120mm"/></style:style>'
        '<style:style style:name="TCorpo.B" style:family="table-column"><style:table-column-properties style:column-width="64mm"/></style:style>'
        '<style:style style:name="TCorpo.A1" style:family="table-cell"><style:table-cell-properties '
        'style:vertical-align="top" fo:padding-left="0mm" fo:padding-right="7mm" fo:padding-top="0mm" '
        'fo:padding-bottom="0mm" fo:border="none"/></style:style>'
        '<style:style style:name="TCorpo.B1" style:family="table-cell"><style:table-cell-properties '
        'style:vertical-align="top" fo:padding-left="5mm" fo:padding-right="0mm" fo:padding-top="0mm" '
        'fo:padding-bottom="0mm" fo:border="none" fo:border-left="0.3mm solid #e4e4e8"/></style:style>'
        '<style:style style:name="PrimeiroTitulo" style:family="paragraph" style:parent-style-name="Titulo da secao">'
        '<style:paragraph-properties fo:margin-top="0mm"/></style:style>'
        '<style:style style:name="EmpresaSeguinte" style:family="paragraph" style:parent-style-name="Empresa">'
        '<style:paragraph-properties fo:margin-top="4mm"/></style:style>'
        '<style:style style:name="PrimeiroContato" style:family="paragraph" style:parent-style-name="Contato">'
        '<style:paragraph-properties fo:margin-top="4mm"/></style:style>'
        '<style:style style:name="Foto" style:family="paragraph" style:parent-style-name="Padrao">'
        '<style:paragraph-properties fo:line-height="100%"/></style:style>'
        '</office:automatic-styles>'
    )


def titulo(texto, primeiro=False):
    return p('PrimeiroTitulo' if primeiro else 'Titulo da secao', span('Barra', '/') + ' ' + t(texto))


def cabecalho():
    contatos = []
    for i, linha in enumerate(CONTATOS):
        partes = []
        for icone, texto, url in linha:
            conteudo = imagem(f'icone-{icone}.png', 3.4) + ' ' + t(texto)
            partes.append(link(url, conteudo) if url else conteudo)
        contatos.append(p('PrimeiroContato' if i == 0 else 'Contato', '<text:s text:c="5"/>'.join(partes)))
    return (
        '<table:table table:name="Cabecalho" table:style-name="TCab">'
        '<table:table-column table:style-name="TCab.A"/><table:table-column table:style-name="TCab.B"/>'
        '<table:table-row table:style-name="TCab.L">'
        '<table:table-cell table:style-name="TCab.A1" office:value-type="string">'
        + p('Foto', imagem('foto-redonda.png', 34.8))
        + '</table:table-cell><table:table-cell table:style-name="TCab.B1" office:value-type="string">'
        + p('Nome', 'Everson ' + span('Laranja', 'Mendes'))
        + p('Cargo buscado', t('Desenvolvedor Full Stack Pleno · .NET & Angular'))
        + ''.join(contatos)
        + '</table:table-cell></table:table-row></table:table>'
    )


def lista(itens):
    return (
        '<text:list text:style-name="Marcadores">'
        + ''.join(f'<text:list-item>{p("Item", t(i))}</text:list-item>' for i in itens)
        + '</text:list>'
    )


def coluna_principal():
    partes = [titulo('Resumo', primeiro=True), p('Resumo', t(RESUMO)), titulo('Experiência')]
    for n, exp in enumerate(EXPERIENCIAS):
        meta_texto, meta_url = exp['meta']
        cabeca = t(exp['empresa'])
        if exp['complemento']:
            cabeca += ' ' + span('Complemento', exp['complemento'])
        cabeca += '<text:tab/>' + link(meta_url, span('Meta', meta_texto))
        partes.append(p('Empresa' if n == 0 else 'EmpresaSeguinte', cabeca))
        for cargo in exp['cargos']:
            partes.append(p('Cargo', t(cargo['titulo']) + '<text:tab/>' + span('Periodo', cargo['periodo'])))
            if cargo.get('texto'):
                partes.append(p('Texto', t(cargo['texto'])))
            partes.append(lista(cargo['itens']))
            if cargo.get('stack'):
                partes.append(p('Stack', span('Destaque', 'Stack:') + ' ' + t(cargo['stack'])))
    return ''.join(partes)


def coluna_lateral():
    partes = [titulo('Competências', primeiro=True)]
    for grupo, chips in COMPETENCIAS:
        partes.append(p('Grupo', t(grupo)))
        pilulas = ' <text:s/>'.join(span('Chip', ' ' + c.replace(' ', ' ') + ' ') for c in chips)
        partes.append(p('Chips', pilulas))
    for nome_secao, itens in (('Formação', FORMACAO), ('Certificações', CERTIFICACOES)):
        partes.append(titulo(nome_secao))
        for nome, local, data, url in itens:
            partes.append(p('Formacao titulo', link(url, t(nome)) if url else t(nome)))
            partes.append(p('Formacao local', t(local)))
            partes.append(p('Formacao data', t(data)))
    return ''.join(partes)


def content_xml():
    corpo = (
        '<table:table table:name="Corpo" table:style-name="TCorpo">'
        '<table:table-column table:style-name="TCorpo.A"/><table:table-column table:style-name="TCorpo.B"/>'
        '<table:table-row><table:table-cell table:style-name="TCorpo.A1" office:value-type="string">'
        + coluna_principal()
        + '</table:table-cell><table:table-cell table:style-name="TCorpo.B1" office:value-type="string">'
        + coluna_lateral()
        + '</table:table-cell></table:table-row></table:table>'
    )
    return (
        f'<?xml version="1.0" encoding="UTF-8"?><office:document-content {NS}>{fontes_decl()}{automaticos()}'
        f'<office:body><office:text>{cabecalho()}{corpo}</office:text></office:body></office:document-content>'
    )


def settings_xml():
    return (
        f'<?xml version="1.0" encoding="UTF-8"?><office:document-settings {NS}><office:settings>'
        '<config:config-item-set config:name="ooo:configuration-settings">'
        '<config:config-item config:name="EmbedFonts" config:type="boolean">true</config:config-item>'
        '</config:config-item-set></office:settings></office:document-settings>'
    )


def meta_xml():
    return (
        '<?xml version="1.0" encoding="UTF-8"?><office:document-meta '
        'xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" '
        'xmlns:dc="http://purl.org/dc/elements/1.1/" office:version="1.3">'
        '<office:meta><dc:title>Everson Mendes - Currículo</dc:title><dc:language>pt-BR</dc:language>'
        '</office:meta></office:document-meta>'
    )


def manifest_xml():
    entradas = [
        ('/', 'application/vnd.oasis.opendocument.text'),
        ('content.xml', 'text/xml'),
        ('styles.xml', 'text/xml'),
        ('settings.xml', 'text/xml'),
        ('meta.xml', 'text/xml'),
    ]
    entradas += [(f'Pictures/{i}', 'image/png') for i in IMAGENS]
    entradas += [(f'Fonts/{a}', 'application/x-font-ttf') for arqs in FONTES.values() for a in arqs]
    linhas = ''.join(
        f'<manifest:file-entry manifest:full-path="{c}" manifest:media-type="{m}"'
        + (' manifest:version="1.3"' if c == '/' else '')
        + '/>'
        for c, m in entradas
    )
    return (
        '<?xml version="1.0" encoding="UTF-8"?><manifest:manifest '
        'xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.3">'
        f'{linhas}</manifest:manifest>'
    )


def main():
    SAIDA.parent.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(SAIDA, 'w') as z:
        z.writestr('mimetype', 'application/vnd.oasis.opendocument.text', compress_type=zipfile.ZIP_STORED)
        for nome, dados in (
            ('content.xml', content_xml()),
            ('styles.xml', styles_xml()),
            ('settings.xml', settings_xml()),
            ('meta.xml', meta_xml()),
            ('META-INF/manifest.xml', manifest_xml()),
        ):
            z.writestr(nome, dados.encode('utf-8'), compress_type=zipfile.ZIP_DEFLATED)
        for img in IMAGENS:
            z.write(PASTA / img, f'Pictures/{img}', compress_type=zipfile.ZIP_STORED)
        for arqs in FONTES.values():
            for a in arqs:
                z.write(PASTA / 'fontes' / a, f'Fonts/{a}', compress_type=zipfile.ZIP_DEFLATED)
    print(SAIDA)


if __name__ == '__main__':
    main()
