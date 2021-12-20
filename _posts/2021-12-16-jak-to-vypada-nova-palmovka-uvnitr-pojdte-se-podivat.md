---
title: Jak vypadá Nová Palmovku uvnitř? Pojďte se podívat!
authorId: martin.sterba
date: 2021-12-16
image: posts/nova-palmovka-prosinec2021/novapalmovka04.jpeg
tags: [Nová Palmovka, Magistrát, Územní rozvoj, Zastupitelstvo]
fancybox:
  - name: Aktuální stav - prosinec 2021
    img:
      - { src: posts/nova-palmovka-prosinec2021/novapalmovka01.jpeg, title: Aktuální stav Nové Palmovky }
      - { src: posts/nova-palmovka-prosinec2021/novapalmovka02.jpeg, title: Aktuální stav Nové Palmovky }
      - { src: posts/nova-palmovka-prosinec2021/novapalmovka03.jpeg, title: Aktuální stav Nové Palmovky }
      - { src: posts/nova-palmovka-prosinec2021/novapalmovka04.jpeg, title: Aktuální stav Nové Palmovky }
      - { src: posts/nova-palmovka-prosinec2021/novapalmovka05.jpeg, title: Aktuální stav Nové Palmovky }
      - { src: posts/nova-palmovka-prosinec2021/novapalmovka06.jpeg, title: Aktuální stav Nové Palmovky }
      - { src: posts/nova-palmovka-prosinec2021/novapalmovka07.jpeg, title: Aktuální stav Nové Palmovky }
      - { src: posts/nova-palmovka-prosinec2021/novapalmovka08.jpeg, title: Aktuální stav Nové Palmovky }      
      - { src: posts/nova-palmovka-prosinec2021/novapalmovka09.jpeg, title: Aktuální stav Nové Palmovky }
      - { src: posts/nova-palmovka-prosinec2021/novapalmovka10.jpeg, title: Aktuální stav Nové Palmovky }
      - { src: posts/nova-palmovka-prosinec2021/novapalmovka11.jpeg, title: Aktuální stav Nové Palmovky }
      - { src: posts/nova-palmovka-prosinec2021/novapalmovka12.jpeg, title: Aktuální stav Nové Palmovky }
---

**Torzo nedostavěné radnice Nová Palmovka míří do majetku hlavního města Prahy. Jsme rádi, že se to i s pomocí našich pirátských kolegů na magistrátu povedlo vyřešit v tomto volebním období. Neustále jsme totiž opakovali, že je nutné konat rychle. Nová Palmovka snad brzy začne ožívat.**

>"Všechny tisky byly zastupitelstvem hlavního města Prahy schváleny všemi hlasy přítomných zastupitelů. Mám radost, že se to povedlo dotáhnout a Nové Palmovce se začne blýskat na lepší časy. Velký dík zaslouží primátor Zdeněk Hřib, náměstek pro územní rozvoj Petr Hlaváček, náměstek pro finance Pavel Vyhnánek a radní pro majetek Jan Chabr," říká předseda místního sdružení Praha 8 [Martin Štěrba](https://praha8.pirati.cz/lide/martin-sterba.html).

Víte, jak to vypadá uvnitř torza budovy Nová Palmovka? Jestli ne, tak se pojďte podívat! 😎

{% include youtube.html id="kAtW8da-pas" %}

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
 
