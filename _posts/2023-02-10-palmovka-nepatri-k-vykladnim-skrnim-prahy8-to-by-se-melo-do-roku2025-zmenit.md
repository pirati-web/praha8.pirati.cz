---
title: "Palmovka nepatří k výkladním skříním Prahy 8, to by se do roku 2025 mělo změnit" 
author: Martin Štěrba
image: posts/novapalmovka-nadraziliben.png
tags: [Palmovka, Nová Palmovka, Agentura EUSPA, Územní rozvoj, Libeň]
fancybox:
  - name: Náměstí Bohumila Hrabala dostane novou tvář
    img:
      - { src: posts/vizualizace/namesti-bohumila-hrabala/namhrabala1.jpg, title: Náměstí Bohumila Hrabala dostane novou tvář }
      - { src: posts/vizualizace/namesti-bohumila-hrabala/namhrabala2.jpg, title: Náměstí Bohumila Hrabala dostane novou tvář }
      - { src: posts/vizualizace/namesti-bohumila-hrabala/namhrabala3.jpg, title: Náměstí Bohumila Hrabala dostane novou tvář }
      - { src: posts/vizualizace/namesti-bohumila-hrabala/namhrabala4.jpg, title: Náměstí Bohumila Hrabala dostane novou tvář }
---

**Do rozestavěné budovy, co měla být původně radnicí, se do roku 2025 nastěhuje EUSPA - EU Agency for the Space Programme. Ta sdružuje mimo jiné řízení provozu kosmických programů EU včetně dosavadních satelitních a navigačních projektů, jako jsou evropský globální satelitní systém Galileo, program Copernicus pro pozorování Země, evropský systém pro pokrytí geostacionární navigací Egnos či Govsatcom pro družicovou komunikaci EU ve státní správě.** Stávající programy v budoucnu doplní program bezpečného družicového spojení IRIS2, který byl dojednán během českého předsednictví v Radě EU. Celkový budoucí přínos pro HDP České republiky do roku 2027 je odhadován na devět miliard korun s každoročním přínosem 600 milionů korun. Jsem rád, že se to povedlo společně s primátorem Zdeňkem Hřibem, náměstkem pro územní rozvoj Petrem Hlaváček a náměstkem pro finance Pavlem Vyhnánkem a dalšími rozhýbat. 

U Nové Palmovky to ale nekončí. Stavební povolení má konečně i projekt **Palmovka One**, který bude stát na místě dnešního autobusového nádraží. Vyrostou tady tři stovky nových bytů, ale i řada služeb a nový supermarket. 

{% for galery in page.fancybox %}
<div class="mt-4">
  <h3>{{ galery.name }}</h3>
  <div class="grid grid-cols-4 gap-4">
  {% for item in galery.img %}
    <div class="">
      <a data-fancybox="gallery" href="{% asset '{{ item.src }}' @path %}" data-caption="{{ item.title }}">{% asset '{{ item.src }}' magick:resize='200x150^' magick:gravity='center' magick:crop='200x150+0+0' class="rounded" %}</a>
    </div>
  {% endfor %}
  </div>
</div>
{% endfor %}
<br />
A aby toho nebylo málo, v oblasti Švábky v místech bývalé tramvajové vozovny připravuje úpravu celého objektu **Prusa Research 3D printers**. Plánuje sem přesunout své sídlo z Holešovic.

Věřím, že termíny budou dodrženy a fakt se moc těším, až to bude hotové. Palmovka si proměnu zaslouží.
