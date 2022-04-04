---
title: Na pomezí Karlína a Libně začala výstavba Rohan City
authorId: martin.sterba
image: posts/vizualizace/rohancity/rohancity11.png
tags: [Libeň, Karlín, Rohanský ostrov, Veřejný prostor, Územní rozvoj]
fancybox:
  - name: Rohan City
    img:
      - { src: posts/vizualizace/rohancity/rohancity1.png, title: Na pomezí Karlína a Libně začala výstavba Rohan City 1 }
      - { src: posts/vizualizace/rohancity/rohancity2.png, title: Na pomezí Karlína a Libně začala výstavba Rohan City 2 }
      - { src: posts/vizualizace/rohancity/rohancity3.png, title: Na pomezí Karlína a Libně začala výstavba Rohan City 3 }
      - { src: posts/vizualizace/rohancity/rohancity4.png, title: Na pomezí Karlína a Libně začala výstavba Rohan City 4 }
      - { src: posts/vizualizace/rohancity/rohancity5.png, title: Na pomezí Karlína a Libně začala výstavba Rohan City 5 }
      - { src: posts/vizualizace/rohancity/rohancity6.png, title: Na pomezí Karlína a Libně začala výstavba Rohan City 6 }
      - { src: posts/vizualizace/rohancity/rohancity7.png, title: Na pomezí Karlína a Libně začala výstavba Rohan City 7 }
      - { src: posts/vizualizace/rohancity/rohancity8.png, title: Na pomezí Karlína a Libně začala výstavba Rohan City 8 }
      - { src: posts/vizualizace/rohancity/rohancity9.png, title: Na pomezí Karlína a Libně začala výstavba Rohan City 9 }
      - { src: posts/vizualizace/rohancity/rohancity10.png, title: Na pomezí Karlína a Libně začala výstavba Rohan City 10 }
      - { src: posts/vizualizace/rohancity/rohancity11.png, title: Na pomezí Karlína a Libně začala výstavba Rohan City 11 }
      - { src: posts/vizualizace/rohancity/rohancity12.png, title: Na pomezí Karlína a Libně začala výstavba Rohan City 12 }
      - { src: posts/vizualizace/rohancity/rohancity13.png, title: Na pomezí Karlína a Libně začala výstavba Rohan City 13 }
---

**Příprava projektu Rohan City trvala 13 let, zahrnovala nejen řadu studií a [projednávání s veřejností, ale i diskuzí s urbanisty a architekty](https://praha8.pirati.cz/aktuality/jaka-bude-budoucnost-rohanskeho-ostrova-zapojte-se-do-diskuze.html). Před pár dny došlo k oficiálnímu zahájení stavby. V nové čtvrti na pomezí Karlína a Libně by mělo v příštích letech najít nový domov a práci zhruba 11 tisíc lidí.**

Výstavba Rohan City je rozdělena do pěti etap. Součástí té první, jejíž dokončení je naplánováno na rok 2023, budou mimo jiné i dvě ze čtyř bytových věží, které navrhla architektka Eva Jiřičná. Ve věžích nazvaných Diamanty Karlín se bude nacházet zhruba stovka bytových jednotek nejrůznějších velikostních kategorií. Autory dalších domů vybudovaných v rámci první etapy jsou architekti z EBM Expert. Tyto objekty ponesou pojmenování Riviéra Karlín a na trh přinesou celkem 118 bytů. Paralelně s první etapou by měla být realizována i etapa druhá, která bude situována v jihozápadní části Rohan City. Na podobě této části projektu se podílí vítězové architektonické soutěže – kanceláře architektů Schindler Seko, Atelier bod, Loxia, Qarta Architektura a A.D.N.S. Druhá etapa počítá s výstavbou bezmála pěti set bytů a tří administrativních budov. V rámci této etapy řeší architekti také vhodné [začlenění budoucího mostu, který propojí Karlín s Holešovicemi](https://praha8.pirati.cz/aktuality/kudy-povede-novy-rohansky-most.html).

>"Rohanský ostrov je jedním z míst, která jsou v Praze pro výstavbu nové moderní čtvrti vhodná. Jsme rádi, že v tomto místě vznikne kvalitní kus města podle pražských stavebních předpisů. Rohanský ostrov ale nejsou jen domy. V Institutu plánování a rozvoje v současné době pracujeme na krajinářské koncepci, která má za cíl zachovat tamní městskou divočinu. Většinu oblasti chceme postupně upravit pro volnočasové aktivity. Území bude plnit také funkci protipovodňové ochrany Prahy,“ řekl [Pražskému deníku](https://prazsky.denik.cz/zpravy_region/rohan-city-stavba-ctvrt-praha-20210916.html) ředitel Institutu plánování a rozvoje Ondřej Boháč.

Rohanský ostrov byl až do první poloviny 20. století řečištěm, které bylo později zasypáno. Nově vzniklé plochy se využívaly k průmyslovým a skladovým účelům. Od sedmdesátých letech tady je i [betonárka, ta by měla v příštích letech zmizet](https://praha8.pirati.cz/aktuality/neprodlouzili-jsme-smlouvu-s-betonarkou.html). Celý brownfield má dnes rozlohu téměř 210 000 metrů čtverečních.

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

