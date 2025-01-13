# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


  function Item({ name, isPacked }) {
    if(isPacked) {
      return <li className="item">{name} #</li>
    }
    return <li className="item">{name}</li>
  }

  export default function PackingList() {
    return (
      <section>
        <h1>Packing List</h1>
        <ul>
          <li>
            <Item name="Space Suit" isPacked={true} />
          </li>
        </ul>
      </section>
    )
  }

  // {
  //   return (
  //     <li>
  //       {name} { isPacked && '#'}
  //     </li>
  //   )
  // }

  export default function List() {
    const listItems = people.map(person => 
      <li>{person}</li>
    );

    return <ul>{listItems}</ul>;
  }

  const chemists = people.filter(person =>
    person.profession === 'chemist'
  )

  const listItems = chemists.map(person =>
    <li>
      <img
        src={getImageUrl(person)}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  ) 

  function Recipe({ drinkers }) {
    return (
      <ol>
        <li>Boil {drinkers} cup of water</li>
      </ol>
    )
  }

  export default function App() {
    <Recipe drinkers={2}/>
  }

  export default function App() {
    return <Toolbar 
      onPlayMovie = {() => alert('Playing')}
      onUploadImage = {() => alert('Uploading!')} 
    />
  }

  function Toolbar({onPlayMovie, onUploadImage}) {
    return (
      <div>
        <Button onClick={onPlayMovie}
          Play Movie
        </Button>
        <Button onClick={onUploadImage}
          Upload Image
        </Button>
      </div>
    )
  }

  function Button({onClick, children}) {
    return (
      <button onClick={onClick}>
        {children}
      </button>
    )
  }

  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  export default function Button() {
    function handleClick() {
      alert('Clicked')
    }

    render(
      <button onclick={handleClick}>
        Click Me
      </button>
    );
  }

  <button onClick={function handleClick(){
    alert('Clicked')
  }}

  <button onClick={() => {
    alert('Clicked')
  }}

  import { useState } from 'react'

  export default function Gallery() {
    const [index, setIndex] = useState(0)

    function handleClick() {
      setIndex(index + 1);
    }

    let sc = sc[index];

    

  }

  onPointerMove = { e => {
    setPosition(
      {
        x: e.clientX,
        y: e.clientY
      }
    )
  }

  setPerson({
    firstName: e.target.value,
    lastName: person.lastName
    email: person.email
  })

  setPerson({
      ...person,
      firstName: e.target.value
    }
  )

  const nextArtWork = { ...person.artWork, city: 'New Delhi' }
  const nextPerson = { ...person, artwork: nextArtWork}

  setPerson({
    ...person,
    artwork: {
      ...person.artWork,
      city: 'New Delhi'
    }
  })

  updatePerson(draft => {
    draft.artWork.city = 'Lagos'
  })

  const artists, setArtists = useState([])

  setArtists([
    ...artists,
    {
      id: nextId++,
      name: name
    }
  ])

  setArtists([
    {
      id: nextId++,
      name: name
    },
    ...artists
  ])

  artists.filter(a => 
    a.id !== artist.id
  )

  nextCounters = counters.map((c, i) => {
    if(i === index) {
      return c + 1;
    }
    else {
      return c
    }
  });
  setCounters(nextCounters)

  const insertAt = 1;
  const nextArtists = [
    ...artists.slice(0, insertAt),
    { id: nextId++, name: name },
    ...artists.slice(insertAt)
  ]
  setArtists(nextArtists);

  setProducts(products.map(product => 
    if (product.id === productId) {
      return {
        ...product,
        count: product.count + 1
      }
    }
    else {
      return product;
    }
  ))

  nextProducts = nextProducts.filter(p => 
    p.count > 0
  )

  setTodos.filter(todo => todo.id !== todoId)

  const ref = useRef(0);

  import { useRef } from 'react'

  export default function Counter() {
    let ref = useRef(0);

    function handleClick() {
      ref.current = ref.current + 1;
      alert('You clicked ' + ref.current + ' times!');
    }

    return (
      <button onClick = {handleClick}>
        Click Me
      </button>
    )
  }

  import { ref } from 'react';

  export default function Form() {
    const inputRef = useRef(null);

    function handleClick() {
      inputRef.current.focus();
    }

    return(
      <>
        <input ref={inputRef} />
        <button onClick={handleClick}>
          Focus the input
        </button>
      </>
    )
  }

  import { useState, useRef, useEffect } from 'react';

  function VideoPlayer({isPlaying, src}) {
    const ref = useRef(null);

    useEffect(() => {
      if (isPlaying) {
        ref.current.play();
      } else {
        ref.current.pause();
      }
    }, [isPlaying])

    return (
      <video ref={ref} src={src} loop playsInline />;
    )
  }

  export default function App() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
      <>
        <button onClick = {() => setIsPlaying(!isPlaying)} >
          { isPlaying ? 'Pause' : 'Play' }
        </button>
        <VideoPlayer
          isPlaying={isPlaying}
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        />
      </>
    )
  }

  import { forwardRef, ref } from 'react'

  const MyInput = forwardRef((props, ref) => {
      return <input {...props, ref={ref}} />
    }
  )
  
  export default function Form() {
    const inputRef = useRef(null)

    function handleClick() {
      inputRef.current.focus();
    }

    return (
      <>
        <MyInput ref={inputRef} />

        <button onClick={handleClick}>
          Click
        </button>
      </>
    )
  }

  useEffect(() => {
      const connection = createConnection();
      connection.connect();

      return () => {
        connection.disconect();
      }
    }
  )
  
  useMemo(() => filerTodos(todos, tab), [todos, tab])

  useCallback(fn, dependencies)

  useCallback((orderDetails) => {
      post('/product/' + productId + '/buy'), {
        referer,
        orderDetails,
      }
    }, [productId, referrer]
  );

  <Fragment> | <> </>

  <Profiler>

  <Suspense> Fallback:

  <StrictMode>

  function Post() {
    return (
      <>
        <PostTitle />
        <PostBody />
      </>
    )
  }

  <Profiler id="Age" onRender={onRender}>
    <App />
  </Profiler> 

  import { StrictMode } from 'react';
  import { createRoot } from 'react-dom/client';

  const root = createRoot(document.getElementById('root'));
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  )

  <Suspense fallback={<Loading />}>
    <SomeComponent />
  </Suspense>

  import { useState, Suspense, lazy } from 'react';
  import Loading from './Loading.js';

  const MarkdownPreview = lazy(() => delayForDemo(import('./MarkdownPreview.js')));

  export default function MarkdownEditor() {
    const [showPreview, setShowPreview] = useState(false);
    const [markdown, setMarkdown] = useState('Hello, **world**!');

    return (
      <>
        <textarea value={markdown} onChange(e => setMarkdown(e.target.value)) />
        <label>
          <input type="checkbox" checked={showPreview} onChange={(e => setShowPreview(e.targert.checked))} />
          Show Preview
        </label>

        <hr />

        {
          showPreview && (
            <Suspense fallback={<Loading />}>
              <h2>Preview</h2>
              <MarkdownPreview markdown = {markdown} />

            </Suspense>
          )
        }
      </>
    )
  } 

  function delayForDemo(promise) {
    return new Promise(resolve => {
      setTimeout(resolve, 2000);
    }).then(() => promise)
  }

  nums1[m,n] = nums2
  nums1.sort!

  def merge(num1, m, num2, n)
    i = m + n - 1
    m -= 1
    n -= 1

    while i >= 0 && n >= 0
      if m >=0 && num1[m] > nums2[n]
        nums1[i] = nums1[m]
        m -= 1
      else
        nums1[i] = nums1[n]
        n -= 1
      end
      i -= 1
    end
  end

  # -----
  nums.delete(val)
  nums.compact!
  nums.size

  def remove_element(nums, val)
    left, right = 0, nums.size

    while left < right
      if nums[left] == val
        nums.delete_at(left)
        right -= 1
      else
        left += 1
      end
    end
    nums.size
  end

  nums.uniq!
  nums.size

  def remove_duplicates(nums)
    solved_marker = 0
    nums.each do |num|
      if nums[solved_marker] != num
        solved_marker += 1
        nums[solved_marker] = num
      end
    end
    solved_marker + 1
  end

  def maj_element(nums)
    c = 0
    m = 0
    nums.each do |num
      if c == 0
        c+= 1
        m = num
      elsif num == m
        c += 1
      else
        c -=1 
      end
    end
    m
  end

  def rotate_array(nums, k)
    k = k % nums.size
    k.times do 
      num = nums.pop
      nums.unshift(num)
    end
    nums
  end

  def maxProfit(prices)
    left = 0
    right = 1

    max = 0

    while right < prices.size
      if prices[left] > prices[right]
        left = right
      else
        max = [max, prices[right] - prices[left]].max
      end
    end
    max
  end

  def max_profit(prices)
    max = 0
    (1...prices.size).each do |i|
      max += [0, prices[i] - prices[i - 1]].max
    end
    max
  end

  n = nums.lenght
  goal = n - 1

  (n - 1).downto(0).each do |i|
    if i + nums[i] >= goal
      goal = i
    end
  end

  goal == 0

  [1,2,3,4]

  [1, 1, 2, 6]
  [24, 12, 4, 1]

  [4, 3, 2, 1]

  res = Array.new(5)
  product = 0

  (0...nums.size).each do |i|
    res[i] = product
    product *= nums[i]

  end

  product = 1
  (0...nums.size).reverse_each do |i|
    res[i] *= product
    product *= nums[i]
  end

  s.split(' ').last.size

  common_str = ''



