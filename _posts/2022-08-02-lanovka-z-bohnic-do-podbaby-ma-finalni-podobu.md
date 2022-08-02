---
title: "Lanovka z Bohnic do Podbaby má finální podobu. Podívejte se!"
authorId: martin.sterba
image: posts/vizualizace/lanovka-bohnice-podbaba/lanovka-final2.jpeg
tags: [Lanovka Bohnice-Podbaba, Doprava, Magistrát, Bohnice]
fancybox:
  - name: Lanovka Bohnice-Trója-Podbaba 
    img:
      - { src: posts/vizualizace/lanovka-bohnice-podbaba/lanovka-final1.jpeg, title: Lanovky z Bohnic do Podbaby má finální podobu. Podívejte se. }
      - { src: posts/vizualizace/lanovka-bohnice-podbaba/lanovka-final2.jpeg, title: Lanovky z Bohnic do Podbaby má finální podobu. Podívejte se. }
      - { src: posts/vizualizace/lanovka-bohnice-podbaba/lanovka-final3.jpeg, title: Lanovky z Bohnic do Podbaby má finální podobu. Podívejte se. }
      - { src: posts/vizualizace/lanovka-bohnice-podbaba/lanovka-final4.jpeg, title: Lanovky z Bohnic do Podbaby má finální podobu. Podívejte se. }
      - { src: posts/vizualizace/lanovka-bohnice-podbaba/lanovka-final5.jpeg, title: Lanovky z Bohnic do Podbaby má finální podobu. Podívejte se. }
      - { src: posts/vizualizace/lanovka-bohnice-podbaba/lanovka-final6.jpeg, title: Lanovky z Bohnic do Podbaby má finální podobu. Podívejte se. }
---

**Dopravní podnik hlavního města Prahy zveřejnil vítěznou podobu na lanovku z Bohnic přes Tróju do Podbaby. Tři stanice lanovky navrhnou architekti londýnského studia William Mattews Associates. Studio stojí také za návrhy londýnské lanovky (London Cable Car) nebo modernizace nádraží London Bridge, páté nejrušnější stanice ve Spojeném království. Do soutěže se přihlásilo 23 zájemců z devíti evropských zemí.**

U lanovky vidíte tramvaj. Bohnice si totiž tramvaje zaslouží, jedno z největších pražských sídlišť má mít kolejové napojení. Tramvaje by měli jezdit od metra v Kobylisích a končit právě tady poblíž obchodního centra Krakov.

**Jak se Vám to líbí?**

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
