---
title: "Tramvajová trať od Vozovny Kobylisy do Zdib má konečně územní rozhodnutí"
author: Martin Štěrba
image: posts/tramvaje-zdiby3.jpg
tags: [Doprava, Tramvaj do Zdib]
fancybox:
  - name: Jak bude vypadat tramvaj z Kobylis do Zdib a Sedlece?
    img:
      - { src: posts/2023-10-31-tramvaj-zdiby/tramvaj-zdiby-01.jpg, title: 'Zákres vedení tramvaje v Dolních Chabrech' }
      - { src: posts/2023-10-31-tramvaj-zdiby/tramvaj-zdiby-02.jpg, title: 'Zákres vedení tramvaje ve Zdibech)' }
      - { src: posts/2023-10-31-tramvaj-zdiby/tramvaj-zdiby-03.jpg, title: 'Plán vedení tramvaje ve Zdibech' }
      - { src: posts/2023-10-31-tramvaj-zdiby/tramvaj-zdiby-04.jpg, title: 'Plán konečné tramvaje v Sedleci' }
      - { src: posts/2023-10-31-tramvaj-zdiby/tramvaj-zdiby-05.jpg, title: 'Vizualizace tramvaje ve Zdibech' }
      - { src: posts/2023-10-31-tramvaj-zdiby/tramvaj-zdiby-06.jpg, title: 'Vizualizace přemostění dálnice D8' }
      - { src: posts/2023-10-31-tramvaj-zdiby/tramvaj-zdiby-07.jpg, title: 'Vizualizace konečné v Sedleci' }
---

**Tramvajový boom v Praze pokračuje, brzy dojde k rozvoji i tady u nás na severu. Tramvajová trať od Vozovny Kobylisy přes Zdib do Sedlece má územní rozhodnutí a vše se tak posunulo blíže k realizaci. Když vše půjde podle plánu, hotovo bude v roce 2028 a po dokončení se bude jednat o první tramvajovou trať, která vyjede z Prahy do Středočeského kraje.**  

<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FPragoprojekt%2Fposts%2Fpfbid0DeCV8oXUVUoEwoUn9u5wuHEoS3yfHVdikNEsu9eQtFfS2tCJ76TEAgHxEM3zM9y7l&show_text=true&width=500" width="500" height="604" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>

Náměstek pro dopravu Zdeněk Hřib před pár dny oznámil, že Praha má také pravomocné povolení na trať z Libuše do Nových Dvorů a ještě letos bude zahájena stavba tramvajové trati na Počernické! Ve výstavbě jsou už tratě také na Václaváku a přes Dvorecký most. Kromě toho má Praha povolení také na nové tratě na Jarov, Strahov a u Národního muzea.

Kam byste chtěli dojet tramvají Vy? Já doufám, že nebude dlouho trvat a budeme mít povolení také na tramvajovou trať z Kobylis do Bohnic a dále do Troji a Podbaby a pak také na trať z Ďáblic přes Letňany do Čakovic. 

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
