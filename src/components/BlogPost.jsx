import React from '@astrojs/react';


export default function BlogPost ({title, url, image, duration, date, pitch}) {
  return (
       <li 
       class="flex basis-96 mx-2 my-3 rounded-md border border-gray-300 bg-light-theme dark:border-gray-600 dark:bg-dark-theme hover:scale-105 duration-500 ">
          <a href={url} class=" h-full rounded-md">
            <div>
              <img class="rounded-md" alt={title} src={image}/>
            </div>
            {/* lower part of the blog post card component */}
            <div class="p-4">
              <p class="text-gray-800 dark:text-gray-100 pb-1">{title}</p>
              <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              class="inline-block text-base">
                <circle 
                cx="12" 
                cy="12" 
                r="10">
                  </circle>
                  <polyline 
                  points="12 6 12 12 16 10">
                    </polyline>
                    </svg>
                    <span>{duration} min read</span>
              <p class="font-bold text-gray-800 dark:text-gray-100 pt-1 pb-1">{date}</p>
              <p class="text-sm text-gray-700 dark:text-gray-300">{pitch}</p>
            </div>
          </a>
      </li>
  );
};



