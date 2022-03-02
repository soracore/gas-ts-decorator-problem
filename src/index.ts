import { IsOptional, IsString } from 'class-validator';

declare const global: {
  [x: string]: any;
};

class Foo {
  @IsOptional()
  @IsString()
  foo: string;
}

// ENTRYPOINT
global.main = function (e: any) {
  console.log('Hello World!');
  const hoge = new Foo();
};
