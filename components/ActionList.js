import { View, FlatList, Dimensions } from "react-native";
import tw from "../lib/tailwind";
import ActionCard from "./ActionCard";
import ActionCardSkeleton from "./skeletons/ActionCardSkeleton";
const { width } = Dimensions.get("screen");
function ActionList({ filteredActions, refresh }) {
  return (
    <View style={tw`flex my-6 py-3`}>
      {filteredActions.l ? (
        <FlatList
          data={filteredActions}
          extraData={refresh}
          ItemSeparatorComponent={() => (
            <View style={{ height: 10, width: 8 }}></View>
          )}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return <ActionCard data={item} isFullWidth={true} />;
          }}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <ActionCardSkeleton />
      )}
    </View>
  );
}

export default ActionList;
