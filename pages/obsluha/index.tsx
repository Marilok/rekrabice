
import { Text } from "@mantine/core";
import ObsluhaWrapper from "../../components/Layouts/Obsluha/ObsluhaWrapper";

export default function Obsluha() {
    return (
        <ObsluhaWrapper title="Obsluha">
                  <Text className="font-bold">Je to urgentní?</Text>
                    <Text>Zavolejte nám na +420 777 777 777</Text>
                  <Text className="font-bold">Není to urgentní?</Text>
                  <Text >Pošlete nám email na marek.svitek@rekrabice.cz</Text>
            </ObsluhaWrapper>
    );
    }