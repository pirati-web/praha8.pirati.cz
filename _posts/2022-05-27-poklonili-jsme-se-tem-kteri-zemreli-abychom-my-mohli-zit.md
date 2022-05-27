---
title: Poklonili jsme se těm, kteří zemřeli, abychom my mohli žít
authorId: martin.sterba
image: posts/2022-05-27-anthropoid80/anthropoid09.jpg
tags: [Anthropoid, Libeň]
fancybox:
  - name: Ukliďme Česko v Praze 8
    img:
      - { src: posts/2022-05-27-anthropoid80/anthropoid01.jpg, title: 80 let od Operace Anthropoid }
      - { src: posts/2022-05-27-anthropoid80/anthropoid02.jpg, title: 80 let od Operace Anthropoid }
      - { src: posts/2022-05-27-anthropoid80/anthropoid03.jpg, title: 80 let od Operace Anthropoid }
      - { src: posts/2022-05-27-anthropoid80/anthropoid04.jpg, title: 80 let od Operace Anthropoid }
      - { src: posts/2022-05-27-anthropoid80/anthropoid05.jpg, title: 80 let od Operace Anthropoid }
      - { src: posts/2022-05-27-anthropoid80/anthropoid06.jpg, title: 80 let od Operace Anthropoid }
      - { src: posts/2022-05-27-anthropoid80/anthropoid07.jpg, title: 80 let od Operace Anthropoid }
---

**Jsou historické momenty, které stojí za to si neustále připomínat. Mezi ně Operace Anthropoid a atentát na zastupujícího říšského protektora Reinharda Heydricha, který se odehrál v zatáčce u Vychovatelny u nás v Libni bezesporu patří.**

Dnes se na tom stejném místě a ve stejný čas jen o 80 let později uskutečnila strhující rekonstrukce celého atentátu. O chvíli později jsme se společně s ministryní obrany Janou Černochovou, ministrem zahraničí Janem Lipavským, primátorem Prahy a mnohými dalšími u nedalekého pomníku poklonili a vzdali hold těm, kteří zemřeli, abychom my mohli žít!

Atentát provedli před 80 lety výsadkáři Jozef Gabčík a Jan Kubiš a svým příkladem ukázali, že Češi (a Slováci) umí být zkrátka i národem hrdinů, kteří se nevzdávají.

**Podívejte se na fotky.** 

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