// tp: Tipo de Personaje, tpo: Tipo de personaje oponente, pa: Poder de ataque, pao: Poder de ataque del oponente
function calcular_daño(tp, tpo, pa, pao) {

  const TIPO_PERSONAJES = {
    fuego: (pa, tpo, pao) => {
      if (tpo === 'agua') 
        return 50 * (pa / pao) * 0.5;
      if (tpo === 'hierba') 
        return 50 * (pa / pao) * 2;
      if (tpo === 'electrico') 
        return 50 * (pa / pao) * 1;
      if (tpo)
        return 50 * (pa / pao) * 0.5;
    },
    agua: (pa, tpo, pao) => {
      if (tpo === 'hierba' || tpo === 'electrico') 
        return 50 * (pa / pao) * 0.5;
      if (tpo === 'fuego')
        return 50 * (pa / pao) * 2;
      if (tpo) 
        return 50 * (pa / pao) * 0.5;
    },
    electrico: (pa, tpo, pao) => {
      if (tpo === 'agua')
        return 50 * (pa / pao) * 2;
      if (tpo === 'hierba' || tpo === 'fuego')
        return 50 * (pa / pao) * 1;
      if (tpo)
        return 50 * (pa / pao) * 0.5;
    },
    hierba: (pa, tpo, pao) => {
      if (tpo === 'fuego')
        return 50 * (pa / pao) * 0.5;
      if (tpo === 'agua')
        return 50 * (pa / pao) * 2;
      if (tpo === 'electrico')
        return 50 * (pa / pao) * 1;
      if (tpo)
        return 50 * (pa / pao) * 0.5;
    }
  }

  // Validando información enviada por parámetro
  if ((typeof tp === 'string' && typeof tpo === 'string') &&
    (typeof pa === 'number' && typeof pao === 'number')) {
    // Normalizando nombre de los personajes
    let tipoPersonaje = tp.toLowerCase()
                            .normalize('NFD').replace(/[\u0300-\u036f]/g,"");
    let tipoPersonajeOp = tpo.toLowerCase()
                              .normalize('NFD').replace(/[\u0300-\u036f]/g,"");
    
    if (!TIPO_PERSONAJES[tipoPersonaje] || !TIPO_PERSONAJES[tipoPersonajeOp]) {
      console.log('Ingresar personaje existente');
    } else {
      let daño = TIPO_PERSONAJES[tipoPersonaje](pa, tipoPersonajeOp, pao);
      console.log(daño);
    }
  } else {
    console.log('Ingresar los datos correctamente');
  }
}

calcular_daño("fuego", "hierba", 100, 100);