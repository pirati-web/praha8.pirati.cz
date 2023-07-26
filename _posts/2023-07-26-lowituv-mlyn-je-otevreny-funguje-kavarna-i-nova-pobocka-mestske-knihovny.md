---
title: "Löwitův mlýn je otevřený, funguje kavárna i nová pobočka Městské knihovny"
author: Piráti Praha 8
image:  posts/2023-07-26-knihovna/knihovna4.jpg
tags:   [Libeň, Löwitův mlýn, Městská knihovna]
fancybox:
  - name: Jak se vám to líbí?
    img:
      - { src: posts/2023-07-26-knihovna/knihovna1.jpg, title: foto – Jiří Podrazil, Městská knihovna v Praze }
      - { src: posts/2023-07-26-knihovna/knihovna2.jpg, title: foto – Jiří Podrazil, Městská knihovna v Praze }
      - { src: posts/2023-07-26-knihovna/knihovna3.jpg, title: foto – Jiří Podrazil, Městská knihovna v Praze }
      - { src: posts/2023-07-26-knihovna/knihovna4.jpg, title: foto – Jiří Podrazil, Městská knihovna v Praze }
      - { src: posts/2023-07-26-knihovna/knihovna5.jpg, title: foto – Jiří Podrazil, Městská knihovna v Praze }
---

**Zdá se, že dobrá věc se podařila. Spolek Velký Mlýn společně s dalšími dotáhl opravu Löwitova mlýna v podzámčí u Rokytky. Nově tady funguje kavárna i pobočka Městská knihovny. Otevřena bude sedm dní v týdnu, v pondělí od 13 do 20 hodin, v úterý až neděli pak od 9 do 20 hodin.**

Díky zaslouží všichni, kteří o úpravu a rekonstrukci zasloužili. A i když jsme na osmičce v opozici, umíme uznat, že tohle se starostovi Ondřeji Grosovi a místostostarostovi Jiřímu Vítkovi povedlo. 

Věříme, že se mlýn společně se Studio ALTA stane do budoucna jedním z center osmičkové kultury. Podzámčí si to určitě zaslouží. 

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
