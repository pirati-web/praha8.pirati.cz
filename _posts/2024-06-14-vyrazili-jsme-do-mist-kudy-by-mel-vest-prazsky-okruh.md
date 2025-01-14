---
title: "Vyrazili jsme do míst, kudy by měl vést Pražský okruh. Chceme, aby byl veden v tunelech"
author: Martin Štěrba
image: posts/2024-06-13-prochazka-drahanske-udoli/vychazka-drahan-8.jpg
tags: [Pražský okruh (dálnice D0), Doprava, Bohnice, Čimice]
fancybox:
  - name: Vycházka Draháňským údolím
    img:
      - { src: posts/2024-06-13-prochazka-drahanske-udoli/vychazka-drahan-1.jpg, title: Vycházka Draháňským údolím }
      - { src: posts/2024-06-13-prochazka-drahanske-udoli/vychazka-drahan-2.jpg, title: Vycházka Draháňským údolím }
      - { src: posts/2024-06-13-prochazka-drahanske-udoli/vychazka-drahan-3.jpg, title: Vycházka Draháňským údolím }
      - { src: posts/2024-06-13-prochazka-drahanske-udoli/vychazka-drahan-4.jpg, title: Vycházka Draháňským údolím }
      - { src: posts/2024-06-13-prochazka-drahanske-udoli/vychazka-drahan-5.jpg, title: Vycházka Draháňským údolím }
      - { src: posts/2024-06-13-prochazka-drahanske-udoli/vychazka-drahan-6.jpg, title: Vycházka Draháňským údolím }
      - { src: posts/2024-06-13-prochazka-drahanske-udoli/vychazka-drahan-7.jpg, title: Vycházka Draháňským údolím }
      - { src: posts/2024-06-13-prochazka-drahanske-udoli/vychazka-drahan-8.jpg, title: Vycházka Draháňským údolím }
---

**Vyrazili jsme na vycházku z Čimic do Draháňského údolí a na hradiště Zámka, která si kladla za cíl upozornit na to, jaké přírodní hodnoty máme na severu Prahy. Věděli jste třeba, že Hradiště Zámka bylo osídleno už okolo roku 3000 před naším letopočtem, jeho zbytky jsou chráněné jako kulturní památka ČR?**

Dálniční okruh okolo Prahy má do těchto mít přivést tisíce aut. Je třeba řešit to, aby tato auta v budoucnu neohrožovala klidný život místních. Roky se na možné zhoršení zdejšího života snaží upozorňovat spolky Rozumná doprava, Bohnice žijí, Zažít Čimice jinak a mnohé další, které čtvrteční vycházku uspořádali. Je skvělé, že si akci nenechal ujít ani osmičkový pirátský senátor Lukáš Wagenknecht. 

>"Draháňské údolí je nádherné místo. Nicméně je teď v ohrožení kvůli plánované dálnici D0, která do těchto míst přivede tisíce aut a kamionů. Dálniční okruh kolem Prahy dlouhodobě řeším se starosty svého obvodu a nejen s nimi. Okruh by měl být dokončen tak, aby opravdu pomohl plynulosti dopravy a co nejméně ovlivnil dotčené obce a místní obyvatele," napsal na [svůj Facebook senátor Lukáš Wagenknecht](https://www.facebook.com/WagenknechtLuk/posts/pfbid02G3dr1N2K3kizebbyhekQqgtsQ9tXNkjDXpmghomwxzMxmCrEz2nKcK35J38QmMs4l).

Jestli se má v příštích letech stavět dálnice okolo Čimic, Bohnic a Chaber, tak mám za to, že by měla být doprava vedena v tunelu tak, jak je navrženo v územním plánu.

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