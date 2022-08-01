---
title: "Jak bude vypadat Libeňák po rekonstrukci? K nepoznání!"
authorId: martin.sterba
image: posts/vizualizace/libensky-most/libenak7.jpg
tags: [Libeňský most, Doprava, Veřejný prostor]
fancybox:
  - name: Jak bude vypadat nový Libeňský most? 
    img:
      - { src: posts/vizualizace/libensky-most/libenak1.jpg, title: Jak bude vypadat nový Libeňský most }
      - { src: posts/vizualizace/libensky-most/libenak2.jpg, title: Jak bude vypadat nový Libeňský most }
      - { src: posts/vizualizace/libensky-most/libenak3.jpg, title: Jak bude vypadat nový Libeňský most }
      - { src: posts/vizualizace/libensky-most/libenak4.jpg, title: Jak bude vypadat nový Libeňský most }
      - { src: posts/vizualizace/libensky-most/libenak5.jpg, title: Jak bude vypadat nový Libeňský most }
      - { src: posts/vizualizace/libensky-most/libenak6.jpg, title: Jak bude vypadat nový Libeňský most }
      - { src: posts/vizualizace/libensky-most/libenak7.jpg, title: Jak bude vypadat nový Libeňský most }
      - { src: posts/vizualizace/libensky-most/libenak8.jpg, title: Jak bude vypadat nový Libeňský most }
      - { src: posts/vizualizace/libensky-most/libenak9.jpg, title: Jak bude vypadat nový Libeňský most }

---

**Takhle by měl po rekonstrukci vypadat Libeňský most. Změní se nejen okolí mostu, ale i prostory v obloucích. Co na něj říkáte?**

Náměstek primátora pro dopravu Adam Scheinherr potvrdil, že stále platí, že budou zachovány obloukové konstrukce, což je to nejcennější na mostě.  Mosty budou navíc doplněny o bezbariérové rampy směrem na Rohanský park, kde postupně rostou nové domy a bude tady i nový osmičkový park Maniny. 

Okolí mostu si klade za cíl přilákat lidi k odpočinku. Prostory pod oblouky nabídnou kavárny, obchůdky, objevit by se mělo i zimní kluziště či skatepark.

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
**Ještě si pojďme říct něco o harmonogramu.** 
- Aktuálně probíhají projekční práce tak, aby se v roce 2024 mohla spustit dvouletá rekonstrukce. 
- Rok tady ale kvůli rekonstrukci nepojedou tramvaje, pěší a cyklisté se z jednoho konce mostu na druhý dostanou vždy po provizorní lávce. 
- Do konce příštího volebního období by tak mělo být snad hotovo. 

**Už se těšíme.**

### Autoři
- **návrh:** Petr Tej, Tomáš Cach, Oto Melter (https://www.bridgestructures.com)
- **Vizualizace:** Jan Dousek, Radovan Záborský (https://dousek-zaborsky.com)
