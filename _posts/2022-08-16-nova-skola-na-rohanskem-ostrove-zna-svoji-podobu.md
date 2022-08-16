---
title: "Nová základní škola na Rohanském ostrově zná svojí podobu"
authorId: martin.sterba
image: posts/vizualizace/zs-rohan/zs-rohan-5.jpeg
tags: [Karlín, Rohanský ostrov, Školství, Územní rozvoj, Základní škola Rohan]
fancybox:
  - name: Základní škola Rohanský ostrov (vítězný návrh)
    img:
      - { src: posts/vizualizace/zs-rohan/zs-rohan-1.jpeg, title: Vítězný návrh od studia A X X I }
      - { src: posts/vizualizace/zs-rohan/zs-rohan-2.jpeg, title: Vítězný návrh od studia A X X I }
      - { src: posts/vizualizace/zs-rohan/zs-rohan-3.jpeg, title: Vítězný návrh od studia A X X I }
      - { src: posts/vizualizace/zs-rohan/zs-rohan-4.jpeg, title: Vítězný návrh od studia A X X I }
      - { src: posts/vizualizace/zs-rohan/zs-rohan-5.jpeg, title: Vítězný návrh od studia A X X I }
      - { src: posts/vizualizace/zs-rohan/zs-rohan-6.jpeg, title: Vítězný návrh od studia A X X I }
fancybox2:
  - name: Základní škola Rohanský ostrov (2. místo)
    img:
      - { src: posts/vizualizace/zs-rohan-2-misto/1.jpg, title: Návrh od studia IGLOO ARCHITEKTI }
      - { src: posts/vizualizace/zs-rohan-2-misto/2.jpg, title: Návrh od studia IGLOO ARCHITEKTI }
      - { src: posts/vizualizace/zs-rohan-2-misto/3.jpg, title: Návrh od studia IGLOO ARCHITEKTI }
      - { src: posts/vizualizace/zs-rohan-2-misto/4.jpg, title: Návrh od studia IGLOO ARCHITEKTI }
      - { src: posts/vizualizace/zs-rohan-2-misto/5.jpg, title: Návrh od studia IGLOO ARCHITEKTI }
      - { src: posts/vizualizace/zs-rohan-2-misto/6.jpg, title: Návrh od studia IGLOO ARCHITEKTI }
---

**Vzhledem ke stále se rozšiřující výstavbě na Rohanském ostrově, v Karlíně a na Invalidovně je nutné myslet i na zajištění dostatečné občanské vybavenosti, stávající školské budovy již nestačí a jsou na hraně kapacity. Praha 8 proto [vyhlásila architektonickou soutěž](https://praha8.pirati.cz/aktuality/jak-bude-vypadat-nova-skola-na-rohanskem-ostrove-praha8-vypisuje-architektonickou-soutez.html) a připravuje výstavbu nové základní školy – to samozřejmě podporujeme a zavazujeme se, že novou školu na Rohanském ostrově v příštích letech postavíme. Bude mít 27 tříd.**

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
Vítězem soutěže se stalo studio A X X I, které získalo nejlepší hodnocení z celkově šestnácti přihlášených projektů. 

- **tým:** Luděk Šimoník, Jan Stolek, Krystof Foltyn, Ivo Stolek
- **vizualizace:** Janoušek & Havlíček Visualisations, Pixbakers

>"Svou orientací škola plně využívá výhledy do obou navazujících parků, jejichž charakter je reflektován architektonickým členěním domu. Zvýšená platforma navazující na "parkové náměstí"  se stane významným orientačním prvkem v území a místem setkávání dětí, rodičů i široké veřejnosti," říká vítězné studio.

![Vizualizace venkovní části bazénu](/assets/img/posts/zs-rohan-osmicka.png)

Na druhém místě skončilo studio IGLOO ARCHITEKTI.

{% for galery in page.fancybox2 %}
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
**[V našem programu pro komunální volby 2022](https://praha8.pirati.cz/volby/2022-komunalni/skolstvi-a-sport-maji-objevovat-skryty-detsky-potencial.html) prosazujeme co nejdostupnější vzdělání, které rozvíjí přirozenou tvořivost. Chceme pomoci dětem objevovat jejich potenciál a lépe vyhodnocovat možnosti, které jim doba nabízí.**
