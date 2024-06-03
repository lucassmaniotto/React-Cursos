import { Text } from "@lucas/design-system";
import { sum } from "@lucas/utils/math/sum";

export function HomeScreen() {
  return (
    <div>
      <Text tag="h1">Home do Projeto</Text>
      <Text tag="p">@lucas/utils/math/sum: sum(2,2) = {sum(2, 2)}</Text>
    </div>
  );
}
