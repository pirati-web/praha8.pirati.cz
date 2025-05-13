---
title: "Nový Libeňák začíná růst ze země, začala další etapa výstavby mostu"
author: Martin Štěrba
image: posts/2025-05-13-zahajeni-libensky-most/libenak_9.jpg
tags: [Doprava, Libeňský most]
fancybox:
  - name: Zahájení stavby 1. etapy nového Libeňského mostu
    img:
      - { src: posts/2025-05-13-zahajeni-libensky-most/libenak_1.jpg, title: Zahájení stavby 1. etapy nového Libeňského mostu }
      - { src: posts/2025-05-13-zahajeni-libensky-most/libenak_2.jpg, title: Zahájení stavby 1. etapy nového Libeňského mostu }
      - { src: posts/2025-05-13-zahajeni-libensky-most/libenak_3.jpg, title: Zahájení stavby 1. etapy nového Libeňského mostu }
      - { src: posts/2025-05-13-zahajeni-libensky-most/libenak_4.jpg, title: Zahájení stavby 1. etapy nového Libeňského mostu }
      - { src: posts/2025-05-13-zahajeni-libensky-most/libenak_5.jpg, title: Zahájení stavby 1. etapy nového Libeňského mostu }
      - { src: posts/2025-05-13-zahajeni-libensky-most/libenak_6.jpg, title: Zahájení stavby 1. etapy nového Libeňského mostu }
      - { src: posts/2025-05-13-zahajeni-libensky-most/libenak_7.jpg, title: Zahájení stavby 1. etapy nového Libeňského mostu }
      - { src: posts/2025-05-13-zahajeni-libensky-most/libenak_8.jpg, title: Zahájení stavby 1. etapy nového Libeňského mostu }
      - { src: posts/2025-05-13-zahajeni-libensky-most/libenak_9.jpg, title: Zahájení stavby 1. etapy nového Libeňského mostu }
---

**Most pro budoucí generace. Dnes začala další etapa výstavby nového Libeňského mostu – konkrétně na naší osmičkové části. Vzniká nový tzv. inundační most a přemostění Štorchovy ulice. Postupně už začíná růst do výšky.**

Prvních 300 metrů nového mostu by mělo být hotovo zhruba za dva roky, tedy počátkem roku 2027. Pod novým Libeňákem vznikne i skvělý veřejný prostor. Most tak nebude bariérou, ale bude volně průchozí a vznikne tady třeba kavárna, restaurace či jiné místo, kde budeme moci trávit volný čas. 

Tím to ale samozřejmě nekončí, TSK Praha musí začít rozjet i další tři části stavby. V současné době se řeší povolení stavby provizorní lávky, která umožní překonání řeky během výstavby hlavního mostu.

Nový Libeňák by měl být dokončen na přelomu let 2029 a 2030. Už aby to bylo!

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