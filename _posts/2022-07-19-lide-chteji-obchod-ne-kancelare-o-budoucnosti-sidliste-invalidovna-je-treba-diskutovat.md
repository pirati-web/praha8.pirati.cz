---
title: "Lidé z Invalidovny chtějí obchod, ne kanceláře! O budoucnosti sídliště je třeba diskutovat"
authorId: karel.ptacek
image: posts/vizualizace/rustonka-west/rustonka-west2.jpeg
tags: [Invalidovna, Územní rozvoj]
fancybox:
  - name: Rustonka West
    img:
      - { src: posts/vizualizace/rustonka-west/rustonka-west1.jpeg, title: Rustonka West}
      - { src: posts/vizualizace/rustonka-west/rustonka-west3.jpeg, title: Rustonka West}
      - { src: posts/vizualizace/rustonka-west/rustonka-west4.jpeg, title: Rustonka West}
      - { src: posts/vizualizace/rustonka-west/rustonka-west5.jpeg, title: Rustonka West}
fancybox2:
  - name: Výstavba nad metrem Invalidovna
    img:
      - { src: posts/vizualizace/invalidovna/invalidovna.jpg, title: Invalidovna (současný stav)}
      - { src: posts/vizualizace/invalidovna/invalidovna2.png, title: Invalidovna (původní verze projektu)}
      - { src: posts/vizualizace/invalidovna/invalidovna3.png, title: Invalidovna (původní verze projektu)}
fancybox3:
  - name: Čechie
    img:
      - { src: posts/vizualizace/cechie/cechie1.jpg, title: Čechie }
      - { src: posts/vizualizace/cechie/cechie2.png, title: Čechie }
      - { src: posts/vizualizace/cechie/cechie3.jpg, title: Čechie }
      - { src: posts/vizualizace/cechie/cechie4.jpg, title: Čechie }
---

**V minulém týdnu proběhla beseda o budoucí podobě sídliště Invalidovna. V úvodu se představilo architektonické studio, které bylo vybráno pro vytvoření koncepční studie s regulačními prvky. Je zajímavé, že toto uskupení vzniklo teprve nedávno.**

>Otázka zazněla záhy, proč si Invalidovna nezaslouží renomovanější a prestižnější architektonickou kancelář jako například Palmovka nebo Rohanský ostrov?  

Následovalo představení třech stavební záměrů ve fázi studie v podání zástupců investorů.

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
První je uvažovaná dostavba druhého objektu vedle současného sídla J&T Bank. **Pracovní název zatím nese Rustonka West.** Má sloužit primárně jako administrativní budova s aktivním parterem pro služby. 

{% for galery in page.fancybox3 %}
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
Jako druhý projekt byla představena aktualizovaná studie **projektu Čechie**. Od původní studie se výrazně liší a obsahuje i vyšší podíl sportovišť a objekt pro budoucí lékařský dům. 

{% for galery in page.fancybox2 %}
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
Jako třetí se prezentoval **záměr společnosti Trigema**, která nedávno koupila objekt přímo nad metrem Invalidovna a chystá zde nájemní bytový dům se službami. Dojde k přepracování původního projektu, který vidíte na vizualizacích. Trigema zároveň staví i bytový dům přímo naproti budově Invalidovny. 

**Následná diskuze byla velmi zajímavá a zaznělo například i to, že si obyvatelé přejí obchoďák a ne kanceláře**. Jiní nechtějí stavět nic, další uvítají rozšíření možností dostupného bydlení a zlepšení občanské vybavenosti v podobě většího supermarketu.

>“Je rozhodně správné, že do participace se aktivně zapojují kromě městské části i místní spolky a obyvatelé sídliště Invalidovna,” říká [Karel Ptáček](http://praha8.pirati.cz/lide/karel-ptacek.html), zastupitel a člen komise pro územní rozvoj, který se této akce zúčastnil.

**Tyto projekty jsou během na dlouhou trať a musejí se neustále hlídat a koordinovat. O to se postaráme.**
