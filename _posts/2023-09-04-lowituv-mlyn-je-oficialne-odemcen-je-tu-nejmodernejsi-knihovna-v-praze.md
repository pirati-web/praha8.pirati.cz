---
title: "Löwitův mlýn je oficiálně odemčen, je tu i nejmodernější knihovna v Praze"
author: Martin Štěrba
image:  posts/2023-09-04-mlyn/mlyn5.jpg,
fancybox:
  - name: Odemknutí Velkého mlýna
    img:
      - { src: posts/2023-09-04-mlyn/mlyn1.jpg, title: Löwitův mlýn je oficiálně otevřen }
      - { src: posts/2023-09-04-mlyn/mlyn2.jpg, title: Löwitův mlýn je oficiálně otevřen }
      - { src: posts/2023-09-04-mlyn/mlyn3.jpg, title: Löwitův mlýn je oficiálně otevřen }
      - { src: posts/2023-09-04-mlyn/mlyn4.jpg, title: Löwitův mlýn je oficiálně otevřen }
      - { src: posts/2023-09-04-mlyn/mlyn5.jpg, title: Löwitův mlýn je oficiálně otevřen }
      - { src: posts/2023-09-04-mlyn/mlyn6.jpg, title: Löwitův mlýn je oficiálně otevřen }
      - { src: posts/2023-09-04-mlyn/mlyn7.jpg, title: Löwitův mlýn je oficiálně otevřen }
      - { src: posts/2023-09-04-mlyn/mlyn8.jpg, title: Löwitův mlýn je oficiálně otevřen }
      - { src: posts/2023-09-04-mlyn/mlyn9.jpg, title: Löwitův mlýn je oficiálně otevřen }
      - { src: posts/2023-09-04-mlyn/mlyn10.jpg, title: Löwitův mlýn je oficiálně otevřen }
---

**Löwitův mlýn ožívá. Dnes byl oficiálně odemčen a provoz tady začíná na ostro. Můžete si sem zajít na kávu či pivo, jen tak posedět, strávit tady příjemný "home office", nebo si sem zajít do knihovny. Libeň má totiž po dlouhých dvaceti letech opět svojí novou knihovnu, a je unikátní hned ve dvou ohledech - podle ředitele Městské knihovny v Praze Tomáše Řeháka se jedná o nejmodernější knihovnu v nejstarší budově. Ve mlýně se teď bude psát nový příběh, a snad to bude lidi z osmičky (a nejen z ní) bavit.**

Je třeba uznat, že úprava a rekonstrukce se povedla. Když jsem se tady byl před víc než rokem podívat, nedá se to srovnávat. Tehdy to byla ruina, a dnes to je parádní prostor. Velký dík za to všechno zaslouží zástupci spolku Velký Mlýn, ale také starosta Ondřej Gros a místostarosta Jiří Vítek. Mnohdy jsme se z opozice ptali na detaily, někdy jsme měli pochybnosti, ale je skvělé, že se to povedlo a začíná nová éra mlýna. 

Doufám, že do budoucna podzámčí stane jedním z center osmičkové kultury. A také doufám, že se podaří dokončit i roky připravený projekt, který alespoň vizuálně, mlýn a budova bývalého pivovaru, ve kterém teď sídlí Studio ALTA, propojí. Tohle místo si to zaslouží. 

Je škoda, že na odemknutí mlýna si nenašel čas primátor Bohuslav Svoboda, aby dorazil do podzámčí Libeňského zámku. Místo sebe poslal svého poradce, který si na chvíli vyzkoušel roli svého šéfa.

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