import ReactMarkdown from 'react-markdown';

const AiRecipe = ({recipe, ref}) => {
  return (
    <section ref={ref} className='suggested-recipe-container' aria-live="polite">
      <h2>AI Chef Recommends:</h2>
      <ReactMarkdown>{recipe}</ReactMarkdown>
    </section>
  );
}

export default AiRecipe;