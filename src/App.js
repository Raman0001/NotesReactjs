import Header from "./Header";
import Content from "./Content";
import { v4 as uuidv4 } from 'uuid';
import Footer from "./Footer";
import { useEffect, useState } from "react";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import apiReq from "./apiReq";

function App() {
  const API_LIST = "http://localhost:3500/items"
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');
  const [search, setSearch] = useState('');
  const [isError, setIsError] = useState(true);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(API_LIST);
        if (!response.ok) throw Error('Unavailable to fetch');
        const listItem = await response.json();
        setItems(listItem);
        setIsError(null);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchApi()
  }, [])


  const add = async (item) => {
    const id = uuidv4();
    const myitem = { id, checked: false, item }
    const listItem = [...items, myitem];
    setItems(listItem)
    const postOptions = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(myitem)
    }
    const result = await apiReq(API_LIST, postOptions)
    if (result) setIsError(result);
  }
  const checkedbox = async (id) => {
    const listItem = items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
    setItems(listItem)

    const myitem = listItem.filter((item) => item.id === id)
    const putOptions = {
      method: "PATCH",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ checked: myitem[0].checked })
    }
    const reqUrl = `${API_LIST}/${id}`;
    const result = await apiReq(reqUrl, putOptions);
    if (result) setIsError(result);
  }
  const deleteTask = async (id) => {
    const listItem = items.filter((item) => item.id !== id)
    setItems(listItem)
    const deleteOptions = { method: "DELETE" };
    const reqUrl = `${API_LIST}/${id}`;
    const result = await apiReq(reqUrl, deleteOptions);
    if (result) setIsError(result);
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text) return;
    add(text);
    setText('');
  }
  const handleSearch = (search) => {
    const listItem = items.filter((item) => item.item === item)
    setSearch(listItem)
  }

  return (
    <div className="max-h-[100vh] flex-col justify-between">
      <Header />
      <AddItem
        text={text}
        setText={setText}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      <p className="text-center font-bold text-xl">Item List </p>
      <main>
        {isLoading && <p className="text-black text-center text-2xl font-bold">Loading...</p>}
        {isError && !isLoading && <p className="text-red-500 text-center text-2xl font-bold ">{`Error : ${isError}`}</p>}
        {!isError && !isLoading && <Content
          items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
          checkedbox={checkedbox}
          deleteTask={deleteTask}
        />}
      </main>
      <Footer items={items} />
    </div>
  )
}

export default App;

