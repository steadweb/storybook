import React, { FC } from 'react';

type StringAlias = string;
type NumberAlias = number;
type AliasesIntersection = StringAlias & NumberAlias;
type AliasesUnion = StringAlias | NumberAlias;
type GenericAlias<T> = { value: T };
interface Props {
  typeAlias: StringAlias;
  aliasesIntersection: AliasesIntersection;
  aliasesUnion: AliasesUnion;
  genericAlias: GenericAlias<string>;
}
export const Component: FC<Props> = (props: Props) => <>JSON.stringify(props)</>;
