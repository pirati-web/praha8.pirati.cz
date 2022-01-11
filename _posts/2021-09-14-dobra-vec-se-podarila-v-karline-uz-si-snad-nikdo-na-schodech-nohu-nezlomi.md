---
title: Dobrá věc se podařila! V Karlíně už si snad nikdo na schodech nohu nezlomí
authorId: karel.ptacek
image: posts/schody-karlin/schody1.jpg
tags: [Karlín, Veřejný prostor]
fancybox:
  - name: Sousedské setkání v Karlíně
    img:
      - { src: posts/schody-karlin/schody1.jpg, title: Sousedské setkání v Karlíně 1 }
      - { src: posts/schody-karlin/schody2.jpg, title: Sousedské setkání v Karlíně 2 }
      - { src: posts/schody-karlin/schody3.jpg, title: Sousedské setkání v Karlíně 3 }
      - { src: posts/schody-karlin/schody4.jpg, title: Sousedské setkání v Karlíně 4 }
      - { src: posts/schody-karlin/schody5.jpg, title: Sousedské setkání v Karlíně 5 }
      - { src: posts/schody-karlin/schody6.jpg, title: Sousedské setkání v Karlíně 6 }
      - { src: posts/schody-karlin/schody7.jpg, title: Sousedské setkání v Karlíně 7 }
---

**Dobrá věc se podařila. V kopečku u cyklostezky, která vede skrz Rohanský ostrov, už snad nedojde k žádnému zranění. V rámci sousedského setkání jsme tady totiž opravili několik let staré dřevěné schody. Na výsledek se můžete podívat sami.**

Rád bych zde veřejně poděkoval těm, kteří dorazili na sousedskou výpomoc při kultivaci přístupu (sestupu) z cyklostezky v úrovni Přístavu 18600. Hlavní díky patří [Honzovi 'Marvelovi' Hornovi](https://praha8.pirati.cz/lide/jan-horn.html), který dodal materiál a nářadí, dále pak silákovi [Pavlovi Francovi](https://praha8.pirati.cz/lide/pavel-franc.html), Dáše Malé za dodávání pozitivní energie a asistenci při řezání hranolů, Jakubovi který přinesl úžasnou bábovku od Dáši Černé, Jiřímu Sekerovi a jeho kamarádovi (omlouvám se, vypadlo mi jméno), dále náhodnému kolemjdoucímu Markovi, který s námi vydržel až do konce a v neposlední řadě i [Přístav 18600](http://www.pristav18600.cz), který se staral o náš pitný režim a po setmění půjčil dva halogeny a ještě řadě dalším co na chvilku přišli pomoct a pak zase museli jít. 

Bylo skvělé sledovat lidi, když za vámi přijdou, poděkují a řeknou, jak je skvělé, že to děláme. Jako poděkování jsme od jedné maminky dostali nealko pivo a od jiných maminek nabídku, že nám objednají pizzu.

Přidávám pár reakcí z mého [postu ve skupině Libeň/Karlín na Facebooku](https://www.facebook.com/groups/libenkarlin/posts/4293121130742052/).
>Vojtěch Dobeš: Skvělé! Bohužel jsem se do skupiny přidal až teď (nevím, jestli to tu předem bylo) a tak jsem se nemohl zastavit, jinak bych vám aspoň třeba přinesl pivo. Kdyby se dělo něco dalšího, napravím!

>Markéta Žilinská: A takhle by se nám pěkně žilo, kdyby každej přiložil ruku k dílu. A nepotřebovali bychom žádný úředníky. Děkuju, jste skvělí! ❤️

>Martina Fabri Bovanová: Susedia, ste skvelí. za všetkých karlínskych obyvateľov posielam veľké ďakujem ♥

>Martin Mikeš: Jste skvělý a super, nikdo na vás nemá 👍👍👍 Děkuji moc. Krásná práce, lidi. Svět ještě není úplně v prdeli 👍

Ještě jednou díky a určitě opět nějakou další sousedskou akci vymyslíme.

Karel z Karlína

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

