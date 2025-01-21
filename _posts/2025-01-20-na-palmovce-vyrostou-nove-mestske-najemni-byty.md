---
title: "Na Palmovce začnou růst nové městské nájemní byty, v budoucnu jich má být až dva tisíce"
author: Karel Ptáček
image: posts/vizualizace/palmovka-rohovy-dum/Palmovka_Zenklova_2_MS.jpeg
tags: [Palmovka, Územní rozvoj, Bydlení]
fancybox:
  - name: Takhle bude nový dům na Palmovce vypadat
    img:
      - { src: posts/vizualizace/palmovka-rohovy-dum/Palmovka_Zenklova_1_MS.jpeg, title: Vizualizace - Pražská developerská společnost }
      - { src: posts/vizualizace/palmovka-rohovy-dum/Palmovka_Zenklova_2_MS.jpeg, title: Vizualizace - Pražská developerská společnost }
      - { src: posts/vizualizace/palmovka-rohovy-dum/Palmovka_Zenklova_3_MS.jpeg, title: Vizualizace - Pražská developerská společnost }
      - { src: posts/vizualizace/palmovka-rohovy-dum/Palmovka_Zenklova_4_MS.jpeg, title: Vizualizace - Pražská developerská společnost }
      - { src: posts/vizualizace/palmovka-rohovy-dum/Palmovka_Zenklova_5_MS.jpeg, title: Vizualizace - Pražská developerská společnost }
      - { src: posts/vizualizace/palmovka-rohovy-dum/Palmovka_Zenklova_6_MS.jpeg, title: Vizualizace - Pražská developerská společnost }
      - { src: posts/vizualizace/palmovka-rohovy-dum/Palmovka_Zenklova_7_MS.jpeg, title: Vizualizace - Pražská developerská společnost }
      - { src: posts/vizualizace/palmovka-rohovy-dum/Palmovka_Zenklova_8_MS.jpeg, title: Vizualizace - Pražská developerská společnost }
      - { src: posts/vizualizace/palmovka-rohovy-dum/Palmovka_Zenklova_9_MS.jpeg, title: Vizualizace - Pražská developerská společnost }
      - { src: posts/vizualizace/palmovka-rohovy-dum/Palmovka_Zenklova_10_MS.jpeg, title: Vizualizace - Pražská developerská společnost }
      - { src: posts/vizualizace/palmovka-rohovy-dum/Palmovka_Zenklova_11_MS.jpeg, title: Vizualizace - Pražská developerská společnost }
---

**Tohle je skvělá zpráva. Roky příprav končí, městský developer začne Pražanům stavět první nájemní byty. Jedním z prvních projektů bude výstavba domu přímo na Palmovce.**

>"Jeden z pilotních projektů nájemního bydlení připravuje Pražská developerská společnost přímo na Palmovce. Moderní objekt má nabídnout kvalitní bydlení se zaměřením na potřebné profese a cílem je podpořit rozvoj nájemního bydlení v Praze. Tento rok se očekává vydání stavebního povolení a následně realizace stavby," říká pirátský zástupce v osmičkové komisi pro územní rozvoj [Karel Ptáček](http://praha8.pirati.cz/lide/karel-ptacek.html).

### Ať už se, prosíme, ta Palmovka konečně začne měnit k lepšímu.

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

