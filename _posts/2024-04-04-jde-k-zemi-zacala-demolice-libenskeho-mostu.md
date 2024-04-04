---
title: "Jde k zemi, začala demolice Libeňského mostu"
author: Martin Štěrba
image: posts/libensky-most-demolice.jpg
tags: [Libeňský most, Doprava]
fancybox:
  - name: Vizualizace Libeňského mostu
    img:
      - { src: posts/vizualizace/libensky-most-2023/most2.jpg, title: Libeňský most (návrh Petra Teje) }
      - { src: posts/vizualizace/libensky-most-2023/most3.jpg, title: Libeňský most (návrh Petra Teje) }
      - { src: posts/vizualizace/libensky-most-2023/most4.jpg, title: Libeňský most (návrh Petra Teje) }
      - { src: posts/vizualizace/libensky-most-2023/most1.jpg, title: Libeňský most (návrh Petra Teje) }
---

**Roky se o tom mluvilo, ale konečně se začalo. První část Libeňského mostu půjde v příštích měsících k zemi a od září by měla začít stavba nového krásného mostu. Část mostu nad Vltavou bude ale prozatím normálně přístupná a to jak pro veřejnou, tak i automobilovou dopravu. Nebude tak ohroženo cestování z osmičky na sedmičku.**

U příležitosti zahájení demolice se na mostě potkali senátor Lukáš Wagenknecht, zastupitel Prahy 8 Martin Štěrba a zastupitel Prahy 7 Ondřej Melena. Nechyběl ani náměstek primátora pro dopravu Zdeněk Hřib.

<iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fpiratipraha8%2Fvideos%2F1150567263028978%2F&show_text=false&width=476&t=0" width="476" height="476" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>

Část Libeňského mostu spadla v úterý odpoledne jako domeček z karet. Demolice začala právě včas.

<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="cs" dir="ltr">Část Libeňského mostu spadla jako domeček z karet. Demolice začala právě včas. <br><br>credit by: JORDAK, s.r.o. <a href="https://t.co/LzucdWeOsE">pic.twitter.com/LzucdWeOsE</a></p>&mdash; Martin Štěrba (@sterbamartin) <a href="https://twitter.com/sterbamartin/status/1775852803690295469?ref_src=twsrc%5Etfw">April 4, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

V minulosti jsme byli v Praze svědky toho, že si rekonstrukce nebo záchrany Libeňského mostu chtěli někteří politici akorát tak vytvořit politický pomník. Třeba hnutí ANO tam třeba chtělo stavět byty pro sestřičky pod záminkou velkolepého developerského projektu. Teď přichází ale tak nejdůležitější a nejsložitější fáze: to opravdu odpracovat a dotáhnout do zdárného konce, aby most mohl sloužit dalším generacím.

Všechny stavební práce potrvají na mostě několik let, kompletní nové Libeňské soumostí by mělo být hotové do roku 2028.

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