---
title: "Martin Štěrba: Na Florenci vyrostou stovky nových bytů"
author: Martin Štěrba
image: posts/martin-sterba/florenc-byty.jpg
tags: [Bydlení, Florenc, Územní rozvoj, Zastupitelstvo]
fancybox:
  - name: Jak bude vypadat Florenc?
    img:
      - { src: posts/2021-11-24-florenc21/florenc3.jpg, title: Budoucí podoba Florence podle architektů }
      - { src: posts/2021-11-24-florenc21/florenc4.jpg, title: Budoucí podoba Florence podle architektů }  
      - { src: posts/2021-11-24-florenc21/florenc7.jpg, title: Budoucí podoba Florence podle architektů }  
      - { src: posts/2021-11-24-florenc21/florenc8.png, title: Budoucí podoba Florence podle architektů }  

---

**Na Florenci vyroste úplně nová čtvrť. Na středečním zastupitelstvu Prahy 8 jsem podpořil velkou věc – a to  usnesení, které umožňuje zastavět areál autobusového nádraží na Florenci. Nejpozději do roku 2041 tady díky změně územnímu plánu najdou nový domov tisíce lidí. Praha 8 získá od developera novou čtyřtřídní školku a také několik menších dostupných bytů, které budeme moci nabídnout těm, kteří je skutečně potřebují.** 

Autobusák ale odsud nezmizí – nejspíš dojde k jeho přesunu o kousek vedle do prostoru mezi dva viadukty. Nemyslím si, že to je špatné řešení, ale bude důležité najít způsob, jak nové nádraží napojit na metro. Nabízí se prodloužení například podzemního vestibulu, tak snad se to povede.

Jasně, ta dohoda s Pentou, která tady bude stavět, není dokonalá. To by ale nebyla žádná dohoda nikdy. Všechno je lepší než to, co tady je teď. Doufám, že v příštích letech se Florenc stane jednou z výkladních skříní nejen naší městské části.

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