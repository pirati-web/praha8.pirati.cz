---
title: "Na Rohanském ostrově vznikne kromě nové školy také školka pro 50 dětí"
authorId: karel.ptacek
image: posts/skolka-deti.jpeg
tags: [Rohanský ostrov, Základní škola Rohan, Karlín, Školství, Územní rozvoj]
fancybox:
  - name: Nová mateřská škola na Rohanském ostrově
    img:
      - { src: posts/vizualizace/ms-rohan/ms-rohan1.jpg, title: Mateřská škola Rohan }
      - { src: posts/vizualizace/ms-rohan/ms-rohan2.jpg, title: Mateřská škola Rohan }
      - { src: posts/vizualizace/ms-rohan/ms-rohan3.jpg, title: Mateřská škola Rohan }
      - { src: posts/vizualizace/ms-rohan/ms-rohan4.jpg, title: Mateřská škola Rohan }
---

**Praha 8 se dlouhodobě potýká s nedostatečnou kapacitou státních mateřských školek. V současné době probíhá změna územního plánu pro novou základní školu na Rohanském ostrově. Počítá se i s novou mateřskou školou.**

>"Územní rozvoj je tak často úzce provázán s oblastí školství. Počet a dostupnost škol a školek má pochopitelně reagovat na vývoj a novou výstavbu ve všech lokalitách naší městské části," říká Karel Ptáček, zastupitel a člen komise pro územní rozvoj. 

Praha 8, konkrétně odbor územního rozvoje dlouhodobě připravuje umístění mateřské školky do přízemí jedné z budov v rámci projektu Rohan City. Počítá se s kapacitou dvou tříd (2x 24 dětí) a zázemím. Je ale nutné splnit řadu požadavků tak, aby dané prostory mohly využívat děti. Proto probíhají intenzivní jednání s budoucím vlastníkem objektů, ve kterých má být školka umístěna. Mezi zásadní věci patří například samostatný vstup do školky a dostatečné oslunění prostoru. Prioritou je pochopitelně i bezpečnost dětí (podél objektu bude procházet pouze slepá ulice) a přechod k oplocené zahradě a hřišti. 

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