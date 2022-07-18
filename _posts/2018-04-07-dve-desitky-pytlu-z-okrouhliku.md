---
title: "Vyrazili jsme uklízet Česko, z Okrouhlíku jsme odnesli dvacet pytlů odpadu"
authorId: martin.sterba
image: posts/2018-04-07-uklidmecesko/uklidmecesko4.jpeg
tags: [Piráti, Ukliďme Česko, Životní prostředí]
fancybox:
  - name: Ukliďme Česko 2018
    img:
      - { src: posts/2018-04-07-uklidmecesko/uklidmecesko1.jpeg, title: Ukliďme Česko 2018 }
      - { src: posts/2018-04-07-uklidmecesko/uklidmecesko2.jpeg, title: Ukliďme Česko 2018 }
      - { src: posts/2018-04-07-uklidmecesko/uklidmecesko3.jpeg, title: Ukliďme Česko 2018 }
      - { src: posts/2018-04-07-uklidmecesko/uklidmecesko4.jpeg, title: Ukliďme Česko 2018 }
      - { src: posts/2018-04-07-uklidmecesko/uklidmecesko5.jpeg, title: Ukliďme Česko 2018 }
      - { src: posts/2018-04-07-uklidmecesko/uklidmecesko6.jpeg, title: Ukliďme Česko 2018 }
      - { src: posts/2018-04-07-uklidmecesko/uklidmecesko7.jpeg, title: Ukliďme Česko 2018 }
      - { src: posts/2018-04-07-uklidmecesko/uklidmecesko8.jpeg, title: Ukliďme Česko 2018 }
      - { src: posts/2018-04-07-uklidmecesko/uklidmecesko9.jpeg, title: Ukliďme Česko 2018 }
      - { src: posts/2018-04-07-uklidmecesko/uklidmecesko10.jpeg, title: Ukliďme Česko 2018 }
---

**Dnes jsme se zúčastnili akce Ukliďme Česko a snažili jsme se osmičku udělat opět o kousek hezčí.**

Setkali jsme se u zvonice základní školy a obešli jsme celý Okrouhlík. Na dvě desítky z nás naplnilo spoustu modrých pytlů nepořádku.

>"Bylo by skvělé, kdyby lidé uměli vyhodit nepořádek do popelnic, a ne do lesa. A stejně jako jsme dnes uklízeli les, v říjnu začneme uklízet i na radnici."

Je to potřeba.

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