# 2020 Koodarijahti

- link to Heroku: [click this](https://agile-tundra-77439.herokuapp.com/)

# Application rules in Finnish

## Painikepeli

Tavoitteena on toteuttaa yksinkertainen moninpeli, jota pelataan painamalla painiketta.
Painikkeen painaminen maksaa yhden pisteen, joita pelaajalla on lähtötilanteessa 20.
Painiketta voi painaa vain, jos pelaajan pistesaldo on positiivinen. Pelaajan painettua
painiketta hänelle ilmoitetaan mahdollisesta voitosta.
Pelaaja voittaa

##

- 5 pistettä joka 10. painallus
- 40 pistettä joka 100. painallus
- 250 pistettä joka 500. painallus.

##

Pelaaja voi voittaa enimmillään yhden palkinnon yhdellä painalluksella. Mikäli samalla
painalluksella voittaisi yllä olevan listan mukaan monta palkintoa, voittaa pelaaja näistä
suurimman. Painiketta painaessa pelaaja ei tiedä, mikä laskurin nykyinen arvo on, sillä kaikki
pelaajat kasvattavat saman laskurin arvoa.
Kun pelaaja painaa painiketta, tapahtuu seuraavat asiat:

##

1. Pelaajalta vähennetään yksi piste.
2. Laskurin arvo kasvaa yhdellä.
3. Mikäli laskurin arvolle osuu palkinto (esim. laskurin arvolla 500 voittaa 250 pistettä),
   ilmoitetaan tästä pelaajalle ja lisätään voitto pelaajan pistesaldoon.
4. Pelaajalle näytetään vaadittujen painallusten määrä seuraavaan voittavaan arvoon.

##

Pelin käyttöliittymässä tulee näkyä pelaajan pistesaldo. Pelitilanteen tulee säilyä, vaikka
selaimen (mikäli selainsovellus) tai sovelluksen (mikäli mobiilisovellus) käynnistää uudelleen.
Mikäli pelaajan pistesaldo on 0, tarjotaan pelaajalle mahdollisuus aloittaa alusta, jolloin
hänen pistesaldonsa palautetaan jälleen arvoon 20.

##

Sovellus koostuu kahdesta osasta: käyttöliittymästä ja palvelimesta.
Pelin käyttöliittymä voidaan toteuttaa joko selain- tai mobiilisovelluksena. Selainsovelluksen
toivotaan olevan tehty nykyaikaisilla työkaluilla, kuten Reactilla, Vuella tai Angularilla.
Mobiilisovellus voi olla Android-, iOS- tai hybridisovellus.

##

Palvelinsovelluksen voit toteuttaa haluamillasi teknologioilla.
