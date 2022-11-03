export const TestHoC = (Component, ...param) => {
  const fetchData = () => {

  }
  
  return () => {
    return <Component fetchData={fetchData} />
  }
}

const A = ({ fetchData }) => {

}

export const ComponentA = TestHoC(A);

