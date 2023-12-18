---
title: "Hřib: Libeňský most opravíme, vylepšíme a zvelebíme jeho okolí"
author: Zdeněk Hřib
image: posts/vizualizace/libensky-most-2023/most1.jpg
tags: [Libeňský most, Doprava, Veřejný prostor]
fancybox:
  - name: Vizualizace nového parku na Rohanském ostrově
    img:
      - { src: posts/vizualizace/libensky-most-2023/most2.jpg, title: Libeňský most (návrh Petra Teje) }
      - { src: posts/vizualizace/libensky-most-2023/most3.jpg, title: Libeňský most (návrh Petra Teje) }
      - { src: posts/vizualizace/libensky-most-2023/most4.jpg, title: Libeňský most (návrh Petra Teje) }
      - { src: posts/vizualizace/libensky-most-2023/most1.jpg, title: Libeňský most (návrh Petra Teje) }
---

**Představujeme vám nově schválenou aktualizovanou architektonickou studii Libeňského soumostí. Jedná se o návrh architekta Petra Teje, kterého už znáte jako spoluautora Štvanické lávky. A i v tomto případě se máte na co těšit!**

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
<br/>

Kromě kompletní opravy celé mostní konstrukce v délce 1200 metrů dojde také k úpravě podmostí podle dochovaných skic původního autora mostu Pavla Janáka. V podmostí tak vznikne příležitost pro vznik kaváren, obchůdků a dalších služeb. Počítáme i s novými přístupy k řece. 

Ukázalo se totiž, že most musí být rekonstruován ve větším rozsahu, než se původně předpokládalo. Je to jednak kvůli zmíněné úpravě okolního veřejného prostoru, tak také z hlediska dopravních potřeb a uvolnění cest pro inženýrské sítě. Výhodou celkové rekonstrukce ale je, že nám most poslouží dalších sto let. 

Při rekonstrukci bude samozřejmě zachován hlavní tvar soumostí. Veškerá vylepšení se budou řídit respektem k původní podobě mostu a záměrům jeho autora. Dílčí úpravy jsou ale příležitostí nabídnou Pražanům a návštěvníkům Prahy takovou podobu mostu a okolí, která kromě lepší dopravy přinese i lepší volnočasové využití.