import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const Pagination = ({total}: {total: number}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = () => {
    if (currentPage < total) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= total) {
      setCurrentPage(page);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePrev} style={styles.button}>
        <Ionicons name="chevron-back" color="grey" />
        <Text style={styles.buttonText}>Prev</Text>
      </TouchableOpacity>
      <View style={styles.pagination}>
        <TouchableOpacity onPress={() => handlePageClick(currentPage - 1)}>
          <Text style={styles.pageNumber}>
            {currentPage > 1 ? currentPage - 1 : ''}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePageClick(currentPage)}>
          <Text
            style={[
              {
                borderWidth: 1,
              },
              styles.pageNumber,
              styles.activePage,
            ]}>
            {currentPage}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePageClick(currentPage + 1)}>
          <Text style={styles.pageNumber}>
            {currentPage < total ? currentPage + 1 : ''}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleNext} style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
        <Ionicons name="chevron-forward" color="grey" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#000',
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  buttonText: {},
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
  },
  pageNumber: {
    marginHorizontal: 5,
  },
  activePage: {
    textAlign: 'center',
    borderRadius: 10,
    borderWidth: 1,
    width: 40,
    padding: 10,
  },
});

export default Pagination;
