import React from 'react';

// 1
type concatFn = (a: string, b: string) => string;

// 2
interface IMyHometask {
  howIDoIt: string;
  simeArray: [string, string, number];
  withData: [{
    howIDoIt: string;
    simeArray: [string, number];
  }]
}

// 3
interface MyArray<T> {
  [N: number]: T;

  reduce(fn: (previousValue: T, item: T, index: number, array: T[]) => T, initial: T): T

}

// 4
interface IHomeTask {
  data: string;
  numbericData: number;
  date: Date;
  externalData: {
      basis: number;
      value: string;
  }
}

type MyPartial<T> = {
  [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]
}

const HomeTask: MyPartial<IHomeTask> = {
  externalData: {
    value: 'win'
  }
}

type THomeTask = typeof HomeTask;

//5
function HomeComponent(props: { firstProp: string }) {
  return (
      <div>
          { props.firstProp }
      </div>
  )
}

type TMyType<T> = T extends React.ComponentType<infer P> ? P : never;

type THomeComponent = TMyType<typeof HomeComponent>;

//6





