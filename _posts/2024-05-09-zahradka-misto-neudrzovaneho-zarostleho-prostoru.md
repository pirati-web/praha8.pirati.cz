---
title: "Zahrádka místo neudržovaného zarostlého prostoru na Palmovce? Proč ne!"
author: Lukáš Wagenknecht
image: posts/2024-05-08-zvelebeni-palmovky/zvelebeni-palmovky11.jpg
tags: [Palmovka, Veřejný prostor, Guerilla gardening]
fancybox:
  - name: Jak jsme zvelebovali Palmovku
    img:
      - { src: posts/2024-05-08-zvelebeni-palmovky/zvelebeni-palmovky1.jpg, title: Zvelebujeme Palmovku }
      - { src: posts/2024-05-08-zvelebeni-palmovky/zvelebeni-palmovky2.jpg, title: Zvelebujeme Palmovku }
      - { src: posts/2024-05-08-zvelebeni-palmovky/zvelebeni-palmovky3.jpg, title: Zvelebujeme Palmovku }
      - { src: posts/2024-05-08-zvelebeni-palmovky/zvelebeni-palmovky4.jpg, title: Zvelebujeme Palmovku }
      - { src: posts/2024-05-08-zvelebeni-palmovky/zvelebeni-palmovky5.jpg, title: Zvelebujeme Palmovku }
      - { src: posts/2024-05-08-zvelebeni-palmovky/zvelebeni-palmovky6.jpg, title: Zvelebujeme Palmovku }
      - { src: posts/2024-05-08-zvelebeni-palmovky/zvelebeni-palmovky7.jpg, title: Zvelebujeme Palmovku }
      - { src: posts/2024-05-08-zvelebeni-palmovky/zvelebeni-palmovky8.jpg, title: Zvelebujeme Palmovku }
      - { src: posts/2024-05-08-zvelebeni-palmovky/zvelebeni-palmovky9.jpg, title: Zvelebujeme Palmovku }
      - { src: posts/2024-05-08-zvelebeni-palmovky/zvelebeni-palmovky10.jpg, title: Zvelebujeme Palmovku }
      - { src: posts/2024-05-08-zvelebeni-palmovky/zvelebeni-palmovky11.jpg, title: Zvelebujeme Palmovku }

---

**Rozhodli jsme alespoň trochu oživit a zpříjemnit prostor Palmovky. Nakoupili jsme tedy sazeničky, zeminu, přinesli si rýče, krumpáč a motyčky a vrhli se na to. Posekat, zrýt, vybrat odpadky (a že jich tam bylo), zasadit kytky a je to!**

<iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FWagenknechtLuk%2Fvideos%2F357099004008595%2F&show_text=false&width=280&t=0" width="280" height="476" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>

Už teď vypadá prostor mnohem lépe a těšíme se, až vše vykvete! 🌸 Kdo půjdete kolem, dejte vědět, jak se vám zahrádka líbí!

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
