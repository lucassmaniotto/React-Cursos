import React from "react";
import { sum } from "@lucas/utils/math/sum";
import { Text } from "@lucas/design-system/components/Text";

export default function HomeScreen() {
  return (
    <main>
      <Text tag="h1"> Home </Text>
      <Text tag="p">
        Importando modulo local: @lucas/utils/math/sum ={">"} sum(2,2):{" "}
        {sum(2, 2)}
      </Text>
    </main>
  );
}
