import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";
import api from "../../../service/api";
import Pius from "../../components/pius";
import { useAuth } from "../../hooks/useAuth";
import { IPiu } from "../../models";

function Feed() {
  const { token } = useAuth();

  const [pius, setPius] = useState<IPiu[]>([]);

  useEffect(() => {
    const getPius = async () => {
      const responsePius = await api.get("/pius", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPius(responsePius.data);
    };
    getPius();
  }, [token]);

  const [search, setSearch] = useState("");

  return (
    <View>
      <Text>AAAAAAABBBBBBB</Text>
      {pius.map((piu) => {
          return <Pius key={piu.id} {...piu} />;
        })}
    </View>
  );
}

export default Feed;
