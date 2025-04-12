import { View, Text, StyleSheet } from 'react-native';
import { useUser } from '@clerk/clerk-expo';
import { SignOutButton } from './SignOutButton';

const Header = () => {
  const { user } = useUser();

  return (
    <View style={styles.headerContainer}>
      <View style={styles.userInfo}>
        <Text style={styles.email} numberOfLines={1}>
          {user?.emailAddresses[0].emailAddress}
        </Text>
      </View>
      <SignOutButton style={styles.signOutButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  userInfo: {
    flex: 1,
    marginRight: 10,
  },
  greeting: {
    fontSize: 14,
    color: '#666',
  },
  email: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  signOutButton: {
    backgroundColor: '#5f9ea0',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
});

export default Header;