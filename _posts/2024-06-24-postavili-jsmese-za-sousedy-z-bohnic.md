---
title: "Postavili jsme se za sousedy z Bohnic a odmítli jsme výstavbu v Pomořanské ulici"
author: Martin Štěrba
image: posts/vizualizace/bohnice-pomoranska/pomoranska3.jpg
tags: [Bohnice, Územní rozvoj, Zastupitelstvo]
fancybox:
  - name: Vizualizace plánované výstavby
    img:
      - { src: posts/vizualizace/bohnice-pomoranska/pomoranska1.jpg, title: Vizualizace plánované výstavby }
      - { src: posts/vizualizace/bohnice-pomoranska/pomoranska2.jpg, title: Vizualizace plánované výstavby }
      - { src: posts/vizualizace/bohnice-pomoranska/pomoranska3.jpg, title: Vizualizace plánované výstavby }
      - { src: posts/vizualizace/bohnice-pomoranska/pomoranska4.jpg, title: Vizualizace plánované výstavby }
      - { src: posts/vizualizace/bohnice-pomoranska/pomoranska5.jpg, title: Vizualizace plánované výstavby }
---

**Postavili jsme se za sousedy z Bohnic a spolek Proti plotu. Na posledním jednání zastupitelstva Prahy 8 jsme nehlasovali pro prodej pozemku a výstavbu polyfunkčního domu v Pomořanské. A to z několika důvodů.**

Máme za to, že napřed měla proběhnout participace s veřejností a až poté měl být představen finální projekt, obyvatelé Bohnic tak byli prakticky stavěni před hotovou věc. Jak zmínil i náš zastupitel Michal Novák, kdyby MČ Praha 8 zahájila komunikaci s občany včas a kdyby byla jednání komisí otevřená pro veřejnost, dalo se to vyřešit tím, že by lidé byli pozváni přímo na jednání komise pro územní rozvoj. Ale bohužel, komise jsou pro veřejnost stále uzavřené. 

V rámci kontribucí by tam měla vzniknout nová občanská vybavenost, sportoviště a nová hasičská zbrojnice. To je vlastně celkem dobrý nápad, rozpaky ale budí cesta, po které budou velká hasičská auta jezdit. Otázkou také je, jestli bude na výstavbu zbrojnice stačit prezentovaných 50 milionů.

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

Dalším problémem je, že se investor zavazuje umožnit MČ Praha 8 prodat až 10 % bytové výstavby za cenu dle odhadu poníženou o 10 %. Víceméně je jisté, že Praha 8 toho nikdy nevyužije, protože nebude mít stovky milionů na pořízení nového bytového fondu. Jedná se tak tedy o populismus, aby se neřeklo.

Zajímavé také je, že většina koaličních stran se před posledními volbami chvástala tím, že nechce zahušťovat sídliště, že chce participaci s obyvateli, a tak dále. Teď vidíme, že to byly jen plané sliby a koalice ODS, ANO, TOP 09, STAN a Patriotů hlasuje zcela opačně.
Na zastupitelstvu jsme nicméně poděkovali za velmi dobře připravené materiály a za to, že projekt za poslední roky prošel velmi výraznou proměnou. Jedná se asi o osmou verzi celého projektu. 

**Budeme to i nadále sledovat.**