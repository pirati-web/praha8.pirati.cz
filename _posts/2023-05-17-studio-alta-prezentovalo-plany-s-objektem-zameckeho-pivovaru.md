---
title: "Studio ALTA prezentovalo plány s objektem zámeckého pivovaru"
author: Pavel Franc
image: posts/2023-05-17-alta/venek2.jpg
tags: [Kultura, Libeň, Studio ALTA]
fancybox:
  - name: Vizualizace oprav zámeckého pivovaru
    img:
      - { src: posts/2023-05-17-alta/dvorek2.jpg, title: Vizualizace dvorku }
      - { src: posts/2023-05-17-alta/kavarna1.jpg, title: Vizualizace kavárny }
      - { src: posts/2023-05-17-alta/sal1.jpg, title: Vizualizace sálu }
      - { src: posts/2023-05-17-alta/schema.jpg, title: Schéma objektu }
      - { src: posts/2023-05-17-alta/venek1.jpg, title: Pohled zvenku }
      - { src: posts/2023-05-17-alta/venek2.jpg, title: Venkovní prostory }
---

**V tomto týdnu se uskutečnila prezentace a diskuse o plánech spojených s fungováním Studia ALTA v objektu bývalého Zámeckého pivovaru v Libeňském podzámčí.**

Je to už 5 měsíců, co se [Studio ALTA](https://www.altart.cz/) rozloučilo s Invalidovnou a přestěhovalo se do objektu [Zámeckého pivovaru](https://mapy.cz/s/cumepogela), který si od městské části dlouhodobě pronajalo za účelem vybudování kulturního centra spojené s opravou chátrajícího objektu.
Z úterní prezentace bylo zřejmé, že přeměnit léty neobývanou barokní budovu - bývalý pivovar, která je navíc památkově chráněna - na fungující prostory divadla, galerie, kavárny a patřičného zázemí, nebude vůbec jednoduchý úkol.

Podle nás se ho ale architekti ze studia [22.22 architekti](https://www.2222architekti.cz/) zhostili na výbornou. Posuďte sami - [prezentace ve formátu PDF](/assets/pdf/23-05-17-openhouse-alta-compressed.pdf)

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

Studio ALTA musí “v pivovaru” kromě tance a experimentů s hudbou a světlem řešit i celou řadu velice nekulturních problémů a to třeba, jak se připojit na zrušenou přípojku vody, jak přesvědčit památkáře o instalaci fotovoltaiky, jak zamezit protýkání vody do sklepů, atd … A hlavně, kde na to všechno vzít peníze. **[Pokud byste byli ochotni přispět na oživení pivovaru, běží na Donio.cz veřejná sbírka.](https://www.donio.cz/studio-alta)**.

Potěšilo nás, že jsme se na prezentaci kromě řady našich sousedů a spoluobčanů potkali i zástupce MČ odboru kultury, kteří nám potvrdili, že cílem odboru je ve spolupráci se Studiem ALTA a projektem Zastavení ve mlýně vybudovat z této oblasti takové volnočasově-kulturně-sportovní centrum.

Pokud byste se chtěli o daném projektu dovědět další detaily, máte další příležitost už tento víkend 20.–21., kdy bude objekt otevřen a přístupný veřejnosti v rámci festivalu [otevřených budouv Open House Praha](https://www.openhousepraha.cz/budova-2023/?key=369).
