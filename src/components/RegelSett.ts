export type TRegel = {
  antallTress: number,
  antallRams: number,
  antallKort: number,
  rundeNummer: number,
}

export type TRegelSett = TRegel[]

export const RegelSett: TRegelSett = [
  {
    antallTress: 2,
    antallRams: 0,
    antallKort: 10,
    rundeNummer: 1
  },
  {
    antallTress: 1,
    antallRams: 1,
    antallKort: 10,
    rundeNummer: 2
  },
  {
    antallTress: 0,
    antallRams: 2,
    antallKort: 10,
    rundeNummer: 3
  },
  {
    antallTress: 3,
    antallRams: 0,
    antallKort: 10,
    rundeNummer: 4
  },
  {
    antallTress: 2,
    antallRams: 1,
    antallKort: 10,
    rundeNummer: 5
  },
  {
    antallTress: 1,
    antallRams: 2,
    antallKort: 11,
    rundeNummer: 6
  },
  {
    antallTress: 0,
    antallRams: 3,
    antallKort: 12,
    rundeNummer: 7
  },
]