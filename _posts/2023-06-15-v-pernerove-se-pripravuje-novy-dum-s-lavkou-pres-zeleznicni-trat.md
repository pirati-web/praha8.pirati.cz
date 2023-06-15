---
title: "V Karlíně se připravuje stavba nového domu s lávkou přes železniční trať"
author: Karel Ptáček
image:  posts/vizualizace/bd-pernerova/Foto1.jpg
tags:   [Karlín, Bydlení, Územní rozvoj]
fancybox:
  - name: Bytový dům v Karlíně
    img:
      - { src: posts/vizualizace/bd-pernerova/Foto1.jpg, title: V Karlíně se připravuje stavba nového domu s lávkou přes železniční trať }
      - { src: posts/vizualizace/bd-pernerova/Foto2.jpg, title: V Karlíně se připravuje stavba nového domu s lávkou přes železniční trať }
      - { src: posts/vizualizace/bd-pernerova/Foto3.jpg, title: V Karlíně se připravuje stavba nového domu s lávkou přes železniční trať }
---

**V Karlíně vyroste unikátní dům s výtahem a lávkou na Vítkov. Na středečním jednání komise pro územní rozvoj jsme skrze našeho zástupce, kterým je [Karel Ptáček](http://praha8.pirati.cz/lide/karel-ptacek.html), dali zelenou představené studii bytového domu na západní straně ulice Pernerova.**

Součástí projektu bude prostor pro vybudování výtahu s lávkou přes železniční trať a nové zpřístupnění Vítkova. Počítá se se 75 byty, s nebytovými prostory v přízemí, parkováním ve dvou podzemních podlažích a s intenzivní zelenou střechu. 

**Jak se vám to líbí?**

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
