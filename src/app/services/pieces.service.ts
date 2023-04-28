import { Injectable } from '@angular/core';
import { Piece } from '../models/piece.model';

@Injectable({
  providedIn: 'root',
})
export class PiecesService {
  texto1 = `Y tú que estás ahí
  Mirando cual si yo fuera un loco
  Deberías de saber que yo de pobre tengo poco
  Y aunque a dentelladas viva de lo que te sobre
  Te puedo asegurar que de los dos tu eres el pobre
  Y ti que no te enteras
  Que la vida no se vive a tu manera
  Que la distancia más corta entre dos puntos es la misma carretera
  Y no hace falta rumbo ni destino
  Se cruza a paso lento que el camino
  Ya te dará tu morada, tu abrigo, tu vino, tu pan y tu risa
  Y sobran ruidos, ruidos, motores y falsos amores que mueren deprisa
  Jugando al esconder con el placer y los dolores
  Que luego a ti y a mí la muerte nunca nos avisa
  Y el dinero, ni es un caballero
  Ni es tan poderoso, lo que por un lado te da
  Por el otro te quita las cosas que se necesitan
  Para que la vida merezca la pena y no parezca una condena
  Mírate bien en los bolsillos que la auténtica indigencia
  No es más, que la impotencia de tu misma sociedad
  La misma que te muerde y te devora
  A cada segundo y cada hora, y cada día que se va
  Y entre las cosas que tengo
  No hay un tesoro mayor
  Que verme siempre a solas con el tiempo
  Que el tiempo es oro, y oro es lo que tengo yo
  El tiempo se detiene ante mi cuando el mundo se levanta
  El tiempo que tu convierte en la rutina que te atraganta
  El tiempo que cunado no me da el sol
  Es porque me está dando la luna
  El mismo que a ti se te escapa
  De la forma más torpe y más inoportuna
  Esa es mi fortuna`;

  texto2 = `Tacita…
  La despedidas son tan amargas
  mejor lo hablamos en otra comparsa,
  Cádiz tenemos toda la eternidad.
  Cuando un gaditano da su último aliento
  el farol de mi proa se va encendiendo
  y me brotan mil flores, rosarios, cadenas
  y dibuja mi cara toda su pena.
  Lo recojo en mi barca, mi barca caletera
  con mi traje de gala de siglo y de estrella,
  me da a cambio un recuerdo,
  una reliquia de amor
  y entre nubes de mojarras
  nos vamos los dos.
  Ahí está la Tacita, la Tacita del cielo
  traigo un alma pérdida.
  Abre al barquero, abre al barquero,
  abre al barquero.
  Otra vez tierra mía
  otra vez, ya lo ves ya lo ves,
  otra vez, de nuevo enamorao.
  Se marchó el camaleón
  y dejó una canción, corazón,
  la razón pa’ no irme de tu lao.
  La vida es un puro carnaval,
  carnaval, carnaval, carnaval
  vamos a celebrarlo
  que si baja el telón
  y me llega el adiós, el adiós,
  ay por dios,
  que me coja cantando,
  que me coja cantando.
  Traigo un alma perdida
  lo mismito que la mía.
  Tumba y retumba Febrero,
  abre tus puertas al barquero.
  Fíjate si te quiero mi Cádiz bonito,
  cada vez que te canto te resucito.`;

  texto3 = `Dicen que el pueblo que canta
  Pueblo que espanta sus males
  Por eso a Cádiz le salen
  Los males por la garganta
  Y así nunca se atraganta
  Con sus pecados mortales
  Y al llegar los carnavales
  Mi pueblo hace una banda
  Banda sin más generales
  Que sus mil chirigoteros
  Los capitanes Veneno
  Veneno de nuestra sangre
  Veneno que de la mano
  Atrapa los corazones
  Y los convierte en pasiones
  Orgullo del gaditano
  Dicen que el pueblo que canta
  Pueblo que espanta sus males
  Por eso a Cádiz le salen
  Los males por la garganta
  Y hace una banda
  Que es esta banda
  De carnavales
  Capitán, corazón
  Corazón, capitán
  Ay veneno
  Me robaste el alma
  Y rebuscaste en mi piel
  Lo malo por lo bueno
  Y conseguiste al final
  Que loco me enamorara
  De una mujer inmortal
  En casa la llamaban Cádiz
  Y en la calle la llamaba
  Ay la Tacita de Plata
  Tu elegiste a la suerte y yo también
  Malditas fueron las ganas de los dos
  Que por tu culpa ya no sé lo que es el bien
  Y no distingo los cariños del dolor
  Ay pero ya
  Y si estoy preso en la cárcel de tu amor
  Y este veneno que tengo es inmortal
  No voy a quedarme sin ti por carnaval
  No voy a quedarme sin ti por carnaval
  No voy a quedarme sin ti por carnaval`;

  texto4 = `Cádiz, Cádiz
Cádiz, Cádiz
Cádiz, Cádiz
La factoría del 3x4
Haciendo historia
En Tacita de Plate
Rodeado de Water
Díselo Caddy
Ya está aquí el Latín Lover
Presente
Tengo a todas las mujeres pendientes
Soy un ochenta por ciento de amor
Y un 30 de inteligente
Hay una mamita que va a ser mi mujer
Que se llaman Cadi
Y ella es mi mujer
Se de muchos que la quieren pretender
Pero ella es para mi
Todos se van a joder
Vámonos para la Caleta Cádiz
Que allí voy a sudarte
Y a gozarte mami
Vengo a rozar tus pieras
Ya tú sabes
En tus pieras me voy a rozar
Y la carpa la vamos a cerrar
Así que dale
Hay quien dice que mi canción
Es fácil
Y yo le digo que no
Que no es fácil
Encontrar una rima no es fácil
Y cuando blublblu cojones la meto fácil
Yo me pongo caliente
Llegando febrero
Me baño en la Caleta
Y pongo el agua pa un puchero
Yo me pongo caliente
Llegando febrero
Quiero hacerte el amor Cádiz
Pero no te encuentro el agujero
Yo me pongo caliente
Llegando febrero
Venga que estoy más fácil
Que un master en la Juan Carlos I
Vámonos para la Caleta Cádiz
Que allí voy a sudarte
Y a gozarte mami
Vengo a rozar tus pieras
Ya tú sabes
Tu bien duro la vas a gozar
Con reggaetón al 3x4
Ya tú sabes`;

  texto5 = `Me tienes envenena
Me tienes envenena
 Del mismo suelo de tus calles
Que se arrastra
Se levanta sibilina
Esta serpiente de comparsa
Que tu carnaval convierte en serpentina
Y todo el veneno que deshila
Con su lengua viperina
Cualquier noche de febrero
Se convierte en copla
Vamos a escuchar
Por tus esquinas
Y mira tú mi Cádiz
Si tu carnaval es una droga poderosa
Que aquí me tienes envenenaita
Cuando se supone que soy yo la venenosa
Y me retuerzo
Me desenredo
Y me deslío
Buscando de nuevo tu aliento
Y nuevamente me lio
Relio, relio, relio
Mis sentimientos
Me tienes envenena
Me tienes envenena
Me tienes envenena
Me tienes envenena
Del mismo suelo de tus calles
Que me arrastro
Me levanto pa quererte
Las maldiciones que me salgan por la boca
Son pa maldecir tu mala suerte
Lástima que esta serpiente
Y su copla
Se conviertan en serpentinas
Y que la magia de tus carnavales
No puedan sacarte
De tanta ruina
Si mi veneno te librara
De tu ruina de tus males
No faltaría mi comparsa
Pa hacerte la mas inmortal entre los inmortales
Pero si mi comparsa queda
Como el besito que otra vez
Te vengo a dar
Me arrastrare lo que tú quieras
Como no voy a arrástrame
Mi Cai de mi sangre
Si me tienes envenena
Si me tienes envenena
Si me tienes envenena`;

  texto6 = `La vida es
Como el andén de una estación
Que marcara la dirección
De los que suben a este tren
Llamado mundo
La vida es
Tan caprichosa que te da una lección
A cambio de romperte el corazón
Y en la garganta te hace un nudo
Es la comida que se tira
Dentro de un contenedor
Mientras que se va una vida
Porque el hambre le gano
Una aventura de amor
De ternura y de pasión
Donde vibra más un móvil
Que el latir de un corazón
Es una puesta de sol
Donde nació mi canción
Quien dijo que la felicidad
Es ese sueño tan preciado
Imposible de cantar
Es porque no ha conocido
El lado perdido
Que guarda el destino
Por poco que tenga
Siempre hay un camino
Quien dijo que la felicidad
Es imposible de alcanzar
Es porque no ha conocido este hermoso lugar
Soy ese niño que aprendí desde pequeño
Tantas lecciones que al final me hice mayor
Soy tan feliz con lo poquito que tengo
Que yo los días grises los pinto de color
Vine a parar a un lugar
Donde brillan las estrellas
Y el valor de la amistad
Puede hacerse indispensable
Para volver a empezar
Quien dijo que la felicidad
Es ese sueño tan preciado
Imposible de alcanzar
Es porque no ha conocido
El lado perdido
Que guarda el destino
Por poco que tenga
Siempre hay un camino
Quien dijo que la felicidad
Es imposible de alcanzar
Es porque no ha conocido este hermoso lugar
Quien dijo que la vida
Hermoso lugar
Es porque no ha conocido este hermoso lugar
Quien dijo que la vida
Este hermoso lugar
Por suerte nuestra felicidad
Es imposible de pensar
`;

  dividirTextoEnquotes(texto: string) {
    return texto.split('\n');
  }

  pieza: Piece = {
    _id: '1',
    agrupacionId: '1',
    quotes: this.sortRandomAndQuitSpaces(this.dividirTextoEnquotes(this.texto1)),
  };

  pieza2: Piece = {
    _id: '2',
    agrupacionId: '2',
    quotes: this.sortRandomAndQuitSpaces(this.dividirTextoEnquotes(this.texto2)),
  };

  pieza3: Piece = {
    _id: '3',
    agrupacionId: '4',
    quotes: this.sortRandomAndQuitSpaces(this.dividirTextoEnquotes(this.texto3)),
  };

  pieza4: Piece = {
    _id: '4',
    agrupacionId: '5',
    quotes: this.sortRandomAndQuitSpaces(this.dividirTextoEnquotes(this.texto4)),
  };

  pieza5: Piece = {
    _id: '5',
    agrupacionId: '6',
    quotes: this.sortRandomAndQuitSpaces(this.dividirTextoEnquotes(this.texto5)),
  };

  pieza6: Piece = {
    _id: '6',
    agrupacionId: '7',
    quotes: this.sortRandomAndQuitSpaces(this.dividirTextoEnquotes(this.texto6)),
  };

  sortRandomAndQuitSpaces(quotes: string[]): string[] {
    return quotes.map((quote) => quote.trim()).sort(() => Math.random() - 0.5);
  }

  pieces: Piece[];
  constructor() {
    this.pieces = [this.pieza, this.pieza2, this.pieza3, this.pieza4, this.pieza5, this.pieza6];
  }

  // Return a random piece from the array pieces
  public getRandomPiece(): Piece {
    return this.pieces[Math.floor(Math.random() * this.pieces.length)];
  }
}
