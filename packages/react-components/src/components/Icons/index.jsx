import { forwardRef } from 'react'
import { oneOf, string } from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { space, color, layout, flexbox, border, position } from 'styled-system'

import theme from '../theme'

const IconBase = styled.svg`
  ${position}
  ${space}
  ${color}
  ${layout}
  ${flexbox}
  ${border}
`

// allows us to get an object property by string, used for accessing colors from theme by passing a string prop
const resolvePath = (object, path, defaultValue) =>
  path.split('.').reduce((o, p) => (o ? o[p] : defaultValue), object)

const rotate = keyframes`
0% { transform:rotate(0deg);}
25% { transform:rotate(90deg);}
50% { transform:rotate(180deg);}
75% { transform:rotate(270deg);}
100% { transform: rotate(360deg);}
`
const IconBasePending = styled(IconBase)`
animation ${rotate} 4s infinite;
`

export const IconGitHub = forwardRef((props, ref) => (
  <IconBase
    width='48'
    height='48'
    viewBox='0 0 48 48'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
    {...props}
  >
    <path
      fill={props.fill}
      d='M24.0001 4C12.9558 4 4 13.1808 4 24.5062C4 33.5666 9.7306 41.2531 17.6773 43.9647C18.6768 44.1545 19.0438 43.5199 19.0438 42.9782C19.0438 42.4892 19.0252 40.8737 19.0167 39.1603C13.4525 40.4008 12.2784 36.7409 12.2784 36.7409C11.3686 34.3706 10.0578 33.7405 10.0578 33.7405C8.24327 32.4677 10.1946 32.4938 10.1946 32.4938C12.203 32.6386 13.2605 34.6071 13.2605 34.6071C15.0443 37.7421 17.9393 36.8356 19.0806 36.3119C19.2601 34.9863 19.7785 34.0818 20.3503 33.5698C15.9082 33.051 11.2382 31.2927 11.2382 23.4354C11.2382 21.1966 12.0195 19.3672 13.299 17.9312C13.0913 17.4146 12.4068 15.3291 13.4927 12.5044C13.4927 12.5044 15.1722 11.9533 18.9942 14.6064C20.5894 14.1519 22.3004 13.9242 24.0001 13.9165C25.6998 13.9242 27.4121 14.1519 29.0104 14.6064C32.8279 11.9533 34.5049 12.5044 34.5049 12.5044C35.5935 15.329 34.9086 17.4146 34.701 17.9312C35.9833 19.3672 36.7593 21.1965 36.7593 23.4354C36.7593 31.3114 32.0806 33.0457 27.6271 33.5533C28.3444 34.1897 28.9836 35.4378 28.9836 37.3507C28.9836 40.0944 28.9604 42.3028 28.9604 42.9783C28.9604 43.5239 29.3204 44.1634 30.3343 43.962C38.2766 41.2474 44 33.5636 44 24.5063C44 13.1808 35.0455 4 24.0001 4Z'
    />
    <path
      d='M11.8378 33.8115C11.7919 33.9154 11.6281 33.9466 11.4792 33.8754C11.3274 33.807 11.2421 33.6653 11.2913 33.5609C11.3364 33.4539 11.5002 33.424 11.6517 33.4959C11.8039 33.564 11.8906 33.7071 11.8378 33.8115ZM12.8673 34.73C12.7675 34.8226 12.5723 34.7795 12.4399 34.6333C12.303 34.4874 12.2774 34.2924 12.3786 34.1984C12.4815 34.106 12.6708 34.1491 12.808 34.2952C12.9449 34.4428 12.9715 34.6366 12.8671 34.7302L12.8673 34.73ZM13.5735 35.9052C13.4452 35.9943 13.2354 35.9107 13.1059 35.7246C12.9778 35.5387 12.9778 35.3154 13.1087 35.226C13.2387 35.1366 13.4452 35.217 13.5765 35.4016C13.7045 35.5908 13.7045 35.8141 13.5734 35.9054L13.5735 35.9052ZM14.7678 37.2663C14.653 37.3927 14.4088 37.3588 14.2299 37.1862C14.0471 37.0175 13.996 36.778 14.111 36.6515C14.2271 36.5248 14.4728 36.5604 14.653 36.7315C14.8347 36.8999 14.8902 37.1412 14.7679 37.2663H14.7678ZM16.3112 37.7259C16.2608 37.8896 16.0255 37.9642 15.7885 37.8946C15.5518 37.8228 15.3969 37.6309 15.4447 37.4652C15.4939 37.3003 15.7303 37.2226 15.9691 37.2971C16.2054 37.3686 16.3607 37.5591 16.3114 37.7259H16.3112ZM18.0681 37.9207C18.0739 38.0933 17.8729 38.2364 17.6241 38.2396C17.3738 38.245 17.1714 38.1054 17.1688 37.9356C17.1688 37.7613 17.3652 37.6196 17.6153 37.6154C17.8642 37.6105 18.0681 37.7492 18.0681 37.9207ZM19.7938 37.8545C19.8236 38.0229 19.6506 38.1959 19.4036 38.2419C19.1607 38.2862 18.9359 38.1822 18.9048 38.0154C18.8746 37.8427 19.0509 37.6699 19.2933 37.6251C19.5408 37.5821 19.7622 37.6833 19.7938 37.8545Z'
      fill='#161614'
    />
  </IconBase>
))

IconGitHub.propTypes = {
  fill: string
}

IconGitHub.defaultProps = {
  fill: ''
}

export const IconGlif = forwardRef((props, ref) => (
  <IconBase
    ref={ref}
    width='24'
    height='24'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fill={props.fill}
      fillRule='evenodd'
      clipRule='evenodd'
      d='M7.28131 9.18344C7.2736 9.16518 7.2696 9.14561 7.26953 9.12582V1.15017C7.26972 1.11023 7.28591 1.072 7.31454 1.04385C7.34316 1.01571 7.3819 0.999936 7.42226 1H19.8441C19.8844 0.999936 19.9232 1.01571 19.9518 1.04385C19.9804 1.072 19.9966 1.11023 19.9968 1.15017V2.64896C19.9967 2.66874 19.9927 2.68832 19.985 2.70658C19.9773 2.72483 19.966 2.7414 19.9519 2.75534C19.9377 2.76929 19.9209 2.78033 19.9024 2.78785C19.8839 2.79536 19.8641 2.79919 19.8441 2.79913H9.81499C9.6221 2.79913 9.43712 2.87495 9.30073 3.00991C9.16434 3.14487 9.08771 3.32792 9.08771 3.51878V6.75721C9.08771 6.94807 9.16434 7.13112 9.30073 7.26608C9.43712 7.40104 9.6221 7.47686 9.81499 7.47686H17.4513C17.6442 7.47686 17.8292 7.40104 17.9656 7.26608C18.102 7.13112 18.1786 6.94807 18.1786 6.75721C18.1786 6.56635 18.102 6.3833 17.9656 6.24834C17.8292 6.11338 17.6442 6.03756 17.4513 6.03756H10.695C10.675 6.03762 10.6552 6.03379 10.6367 6.02628C10.6182 6.01876 10.6014 6.00772 10.5872 5.99378C10.573 5.97983 10.5617 5.96326 10.554 5.94501C10.5463 5.92675 10.5423 5.90718 10.5423 5.88739V4.3886C10.5423 4.36882 10.5463 4.34924 10.554 4.33098C10.5617 4.31273 10.573 4.29616 10.5872 4.28222C10.6014 4.26827 10.6182 4.25723 10.6367 4.24971C10.6552 4.2422 10.675 4.23837 10.695 4.23843H19.8441C19.8641 4.23837 19.8839 4.2422 19.9024 4.24971C19.9209 4.25723 19.9377 4.26827 19.9519 4.28222C19.966 4.29616 19.9773 4.31273 19.985 4.33098C19.9927 4.34924 19.9967 4.36882 19.9968 4.3886V9.12582C19.9967 9.14561 19.9927 9.16518 19.985 9.18344C19.9773 9.20169 19.966 9.21826 19.9519 9.23221C19.9377 9.24615 19.9209 9.25719 19.9024 9.26471C19.8839 9.27222 19.8641 9.27605 19.8441 9.27599H7.42226C7.40227 9.27605 7.38246 9.27222 7.36396 9.26471C7.34547 9.25719 7.32865 9.24615 7.31447 9.23221C7.30028 9.21826 7.28902 9.20169 7.28131 9.18344ZM19.9549 15.7578C19.9262 15.7859 19.8874 15.8016 19.847 15.8015H4.15297C4.13286 15.8016 4.11294 15.7977 4.09436 15.7901C4.07577 15.7825 4.05888 15.7714 4.04466 15.7573C4.03045 15.7433 4.01918 15.7266 4.01152 15.7082C4.00385 15.6898 3.99994 15.6701 4 15.6502V14.1524C4.00019 14.1125 4.01641 14.0742 4.04509 14.0461C4.07377 14.018 4.11257 14.0022 4.15297 14.0024H19.847C19.8874 14.0022 19.9262 14.018 19.9549 14.0461C19.9836 14.0742 19.9998 14.1125 20 14.1524V15.6514C19.9998 15.6914 19.9836 15.7296 19.9549 15.7578ZM19.847 12.5603C19.867 12.5604 19.8868 12.5565 19.9053 12.5491C19.9238 12.5416 19.9407 12.5306 19.9549 12.5166C19.9691 12.5027 19.9804 12.4862 19.9881 12.4679C19.9959 12.4497 19.9999 12.4301 20 12.4103V10.9113C19.9998 10.8713 19.9836 10.8331 19.9549 10.8049C19.9262 10.7767 19.8874 10.761 19.847 10.7611H6.54546C6.35257 10.7611 6.16759 10.6853 6.0312 10.5503C5.89481 10.4154 5.81818 10.2323 5.81818 10.0415V1.1972C5.81831 1.15722 5.8024 1.11883 5.77395 1.09045C5.7455 1.06207 5.70682 1.04602 5.66643 1.04583H4.15176C4.11136 1.04602 4.07269 1.06207 4.04423 1.09045C4.01578 1.11883 3.99987 1.15722 4 1.1972V12.4103C4.00001 12.4485 4.01485 12.4852 4.04146 12.5128L4.04485 12.5164C4.0588 12.5301 4.07536 12.5411 4.09358 12.5485C4.11179 12.556 4.13132 12.5598 4.15103 12.5598H19.847V12.5603ZM4.01106 22.9071C4.00354 22.8886 3.99979 22.8689 4.00001 22.849V17.3945C4.0002 17.3545 4.01642 17.3162 4.0451 17.2881C4.07378 17.2599 4.11258 17.2442 4.15298 17.2443H19.847C19.8874 17.2442 19.9262 17.2599 19.9549 17.2881C19.9836 17.3162 19.9998 17.3545 20 17.3945V18.8929C19.9998 18.9329 19.9836 18.9712 19.9549 18.9993C19.9262 19.0275 19.8874 19.0432 19.847 19.0431H6.54546C6.35258 19.0431 6.16759 19.1189 6.0312 19.2538C5.89481 19.3887 5.81819 19.5718 5.81819 19.7626C5.81819 19.9534 5.89481 20.1364 6.0312 20.2713C6.16759 20.4063 6.35258 20.4821 6.54546 20.4821H19.847C19.8874 20.482 19.9262 20.4977 19.9549 20.5258C19.9836 20.554 19.9998 20.5922 20 20.6322V22.1319C19.9998 22.1719 19.9836 22.2101 19.9549 22.2383C19.9262 22.2664 19.8874 22.2822 19.847 22.282H6.39249C6.24039 22.282 6.0945 22.3417 5.98683 22.448C5.87916 22.5543 5.81851 22.6985 5.81819 22.849C5.81842 22.8689 5.81466 22.8886 5.80714 22.9071C5.79963 22.9255 5.78849 22.9423 5.77439 22.9565C5.76029 22.9707 5.74349 22.982 5.72496 22.9897C5.70643 22.9974 5.68654 23.0014 5.66643 23.0015H4.15177C4.13166 23.0014 4.11177 22.9974 4.09324 22.9897C4.07472 22.982 4.05792 22.9707 4.04381 22.9565C4.02971 22.9423 4.01858 22.9255 4.01106 22.9071Z'
    />
  </IconBase>
))

IconGlif.propTypes = {
  fill: string
}

IconGlif.defaultProps = {
  fill: ''
}

export const IconSuccess = forwardRef((props, ref) => (
  <IconBase
    ref={ref}
    width='24'
    height='25'
    viewBox='0 0 24 25'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <mask id='path-2-inside-1' fill='white'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.51379 11.4678L6.06942 7.43259C5.9136 7.25004 6.04333 6.96875 6.28334 6.96875L13.706 6.96875C13.9461 6.96875 14.0758 7.25004 13.92 7.43259L10.474 11.4697L13.9184 15.5049C14.0742 15.6875 13.9445 15.9688 13.7045 15.9688H6.28179C6.04178 15.9688 5.91205 15.6875 6.06787 15.5049L9.51379 11.4678Z'
      />
    </mask>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M9.51379 11.4678L6.06942 7.43259C5.9136 7.25004 6.04333 6.96875 6.28334 6.96875L13.706 6.96875C13.9461 6.96875 14.0758 7.25004 13.92 7.43259L10.474 11.4697L13.9184 15.5049C14.0742 15.6875 13.9445 15.9688 13.7045 15.9688H6.28179C6.04178 15.9688 5.91205 15.6875 6.06787 15.5049L9.51379 11.4678Z'
      fill='#FDB221'
    />
    <path
      d='M9.51379 11.4678L10.3695 12.1982L10.9929 11.4678L10.3695 10.7375L9.51379 11.4678ZM6.06942 7.43259L6.9251 6.70222L6.9251 6.70222L6.06942 7.43259ZM6.28334 6.96875L6.28334 5.84375H6.28334V6.96875ZM13.706 6.96875L13.706 8.09375H13.706V6.96875ZM13.92 7.43259L13.0643 6.70222L13.0643 6.70222L13.92 7.43259ZM10.474 11.4697L9.61838 10.7393L8.99495 11.4697L9.61838 12.2L10.474 11.4697ZM13.9184 15.5049L13.0627 16.2353L13.0627 16.2353L13.9184 15.5049ZM6.06787 15.5049L5.2122 14.7745L5.2122 14.7745L6.06787 15.5049ZM10.3695 10.7375L6.9251 6.70222L5.21375 8.16297L8.65811 12.1982L10.3695 10.7375ZM6.9251 6.70222C7.39257 7.24988 7.00338 8.09375 6.28334 8.09375V5.84375C5.08327 5.84375 4.43464 7.2502 5.21375 8.16297L6.9251 6.70222ZM6.28334 8.09375L13.706 8.09375L13.706 5.84375L6.28334 5.84375L6.28334 8.09375ZM13.706 8.09375C12.986 8.09375 12.5968 7.24988 13.0643 6.70222L14.7756 8.16297C15.5547 7.2502 14.9061 5.84375 13.706 5.84375V8.09375ZM13.0643 6.70222L9.61838 10.7393L11.3297 12.2L14.7756 8.16297L13.0643 6.70222ZM9.61838 12.2L13.0627 16.2353L14.7741 14.7745L11.3297 10.7393L9.61838 12.2ZM13.0627 16.2353C12.5953 15.6876 12.9844 14.8438 13.7045 14.8438V17.0938C14.9046 17.0938 15.5532 15.6873 14.7741 14.7745L13.0627 16.2353ZM13.7045 14.8438H6.28179V17.0938H13.7045V14.8438ZM6.28179 14.8438C7.00184 14.8438 7.39101 15.6876 6.92355 16.2353L5.2122 14.7745C4.43309 15.6873 5.08172 17.0938 6.28179 17.0938V14.8438ZM6.92355 16.2353L10.3695 12.1982L8.65811 10.7375L5.2122 14.7745L6.92355 16.2353Z'
      fill='#000'
      mask='url(#path-2-inside-1)'
    />
    <rect y='0.962891' width='24' height='24' rx='12' fill='#444444' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M17.7296 9.25774C18.0901 9.64826 18.0901 10.2814 17.7296 10.672L11.2681 17.672C10.9076 18.0625 10.3232 18.0625 9.96267 17.672L6.27036 13.672C5.90988 13.2814 5.90988 12.6483 6.27036 12.2577C6.63085 11.8672 7.21531 11.8672 7.57579 12.2577L10.6154 15.5506L16.4242 9.25774C16.7847 8.86721 17.3692 8.86721 17.7296 9.25774Z'
      fill='white'
    />
  </IconBase>
))

export const IconFail = forwardRef((props, ref) => (
  <IconBase
    ref={ref}
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <circle cx='12' cy='12' r='12' fill='#E63838' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M7.29489 15.2921C6.90442 15.6826 6.90442 16.3157 7.29489 16.7062C7.68535 17.0966 8.31842 17.0966 8.70888 16.7062L11.9994 13.4155L15.2916 16.7079C15.6821 17.0984 16.3151 17.0984 16.7056 16.7079C17.0961 16.3174 17.0961 15.6843 16.7056 15.2938L13.4134 12.0014L16.7076 8.70694C17.0981 8.31645 17.0981 7.68335 16.7076 7.29286C16.3172 6.90238 15.6841 6.90238 15.2937 7.29286L11.9994 10.5873L8.70684 7.29462C8.31638 6.90413 7.68331 6.90413 7.29285 7.29462C6.90238 7.68511 6.90238 8.31821 7.29285 8.7087L10.5854 12.0014L7.29489 15.2921Z'
      fill='white'
    />
  </IconBase>
))

export const IconPending = forwardRef((props, ref) => (
  <IconBasePending
    ref={ref}
    width='24px'
    height='24px'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <rect width='24' height='24' rx='12' fill='#FDB221' />
    <mask id='path-2-inside-1' fill='white'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.4006 11.9985L7.08534 6.60939C6.88876 6.36388 7.06355 6 7.37806 6H16.6265C16.9411 6 17.1159 6.36388 16.9193 6.60939L12.6017 12.0015L16.9169 17.3906C17.1135 17.6361 16.9387 18 16.6242 18H7.3757C7.06119 18 6.8864 17.6361 7.08298 17.3906L11.4006 11.9985Z'
      />
    </mask>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M11.4006 11.9985L7.08534 6.60939C6.88876 6.36388 7.06355 6 7.37806 6H16.6265C16.9411 6 17.1159 6.36388 16.9193 6.60939L12.6017 12.0015L16.9169 17.3906C17.1135 17.6361 16.9387 18 16.6242 18H7.3757C7.06119 18 6.8864 17.6361 7.08298 17.3906L11.4006 11.9985Z'
      fill='#FDB221'
    />
    <path
      d='M11.4006 11.9985L12.5715 12.9361L13.3222 11.9985L12.5715 11.061L11.4006 11.9985ZM7.08534 6.60939L5.91446 7.54695L5.91446 7.54695L7.08534 6.60939ZM16.9193 6.60939L15.7484 5.67183L15.7484 5.67183L16.9193 6.60939ZM12.6017 12.0015L11.4308 11.0639L10.6801 12.0015L11.4308 12.939L12.6017 12.0015ZM16.9169 17.3906L15.746 18.3282L15.746 18.3282L16.9169 17.3906ZM7.08298 17.3906L8.25387 18.3282L8.25387 18.3282L7.08298 17.3906ZM12.5715 11.061L8.25623 5.67183L5.91446 7.54695L10.2297 12.9361L12.5715 11.061ZM8.25623 5.67183C8.84599 6.40835 8.32162 7.5 7.37806 7.5V4.5C5.80547 4.5 4.93153 6.31941 5.91446 7.54695L8.25623 5.67183ZM7.37806 7.5H16.6265V4.5H7.37806V7.5ZM16.6265 7.5C15.683 7.5 15.1586 6.40836 15.7484 5.67183L18.0902 7.54695C19.0731 6.3194 18.1991 4.5 16.6265 4.5V7.5ZM15.7484 5.67183L11.4308 11.0639L13.7726 12.939L18.0902 7.54695L15.7484 5.67183ZM11.4308 12.939L15.746 18.3282L18.0878 16.453L13.7726 11.0639L11.4308 12.939ZM15.746 18.3282C15.1563 17.5916 15.6806 16.5 16.6242 16.5V19.5C18.1968 19.5 19.0707 17.6806 18.0878 16.453L15.746 18.3282ZM16.6242 16.5H7.3757V19.5H16.6242V16.5ZM7.3757 16.5C8.31925 16.5 8.84363 17.5916 8.25387 18.3282L5.9121 16.453C4.92916 17.6806 5.80312 19.5 7.3757 19.5V16.5ZM8.25387 18.3282L12.5715 12.9361L10.2297 11.061L5.9121 16.453L8.25387 18.3282Z'
      fill='#444444'
      mask='url(#path-2-inside-1)'
    />
  </IconBasePending>
))

export const IconSend = forwardRef((_, ref) => (
  <IconBase
    width='34'
    height='34'
    viewBox='0 0 34 34'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
  >
    <rect
      x='33'
      y='33'
      width='32'
      height='32'
      rx='16'
      transform='rotate(-180 33 33)'
      fill='transparent'
    />
    <path
      d='M17.5657 10.4343C17.2533 10.1219 16.7467 10.1219 16.4343 10.4343L11.3431 15.5255C11.0307 15.8379 11.0307 16.3444 11.3431 16.6569C11.6556 16.9693 12.1621 16.9693 12.4745 16.6569L17 12.1314L21.5255 16.6569C21.8379 16.9693 22.3444 16.9693 22.6569 16.6569C22.9693 16.3444 22.9693 15.8379 22.6569 15.5255L17.5657 10.4343ZM17.8 23L17.8 11L16.2 11L16.2 23L17.8 23Z'
      fill={theme.colors.core.nearblack}
    />
    <rect
      x='33'
      y='33'
      width='32'
      height='32'
      rx='16'
      transform='rotate(-180 33 33)'
      stroke={theme.colors.core.nearblack}
      strokeWidth='1.4'
    />
  </IconBase>
))

export const IconReceive = forwardRef((_, ref) => (
  <IconBase
    width='34'
    height='34'
    viewBox='0 0 34 34'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
  >
    <rect
      x='1'
      y='1'
      width='32'
      height='32'
      rx='16'
      fill={theme.colors.core.primary}
    />
    <path
      d='M16.4343 23.5657C16.7467 23.8781 17.2533 23.8781 17.5657 23.5657L22.6569 18.4745C22.9693 18.1621 22.9693 17.6556 22.6569 17.3431C22.3444 17.0307 21.8379 17.0307 21.5255 17.3431L17 21.8686L12.4745 17.3431C12.1621 17.0307 11.6556 17.0307 11.3431 17.3431C11.0307 17.6556 11.0307 18.1621 11.3431 18.4745L16.4343 23.5657ZM16.2 11L16.2 23L17.8 23L17.8 11L16.2 11Z'
      fill='#E8ECF7'
    />
    <rect
      x='1'
      y='1'
      width='32'
      height='32'
      rx='16'
      stroke='#5E26FF'
      strokeWidth='1.4'
    />
  </IconBase>
))

// Todo: Remove or move
// IconReceive.propTypes = {
//   status: oneOf(['confirmed', 'pending']).isRequired
// }

export const IconClose = forwardRef((props, ref) => {
  let fill = theme.colors.core.primary
  if (props?.fill) {
    const themeColor = resolvePath(theme.colors, props.fill)
    fill = themeColor || props.fill
  }
  return (
    <IconBase
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      ref={ref}
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M19.7333 4.2669C19.3776 3.91103 18.801 3.91103 18.4453 4.2669L11.9994 10.7166L5.55552 4.26885C5.19986 3.91299 4.62323 3.91299 4.26757 4.26885C3.91191 4.62472 3.91191 5.20169 4.26757 5.55756L10.7115 12.0053L4.27793 18.4426C3.92228 18.7985 3.92228 19.3755 4.27793 19.7313C4.63359 20.0872 5.21022 20.0872 5.56587 19.7313L11.9994 13.294L18.435 19.7333C18.7906 20.0892 19.3672 20.0892 19.7229 19.7333C20.0786 19.3774 20.0786 18.8005 19.7229 18.4446L13.2874 12.0053L19.7333 5.5556C20.0889 5.19974 20.0889 4.62276 19.7333 4.2669Z'
        fill={fill}
      />
    </IconBase>
  )
})

IconClose.propTypes = {
  fill: string
}

export const IconApproximatelyEquals = forwardRef((props, ref) => (
  <IconBase
    width='24'
    height='24'
    viewBox='0 0 32 32'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
    {...props}
  >
    <path
      d='M3 12C3 7.02944 7.02944 3 12 3V3C16.9706 3 21 7.02944 21 12V12C21 16.9706 16.9706 21 12 21V21C7.02944 21 3 16.9706 3 12V12Z'
      fill='#F6F8FE'
    />
    <path
      d='M8.93342 11.6614C9.19742 11.0179 9.50267 10.56 9.84917 10.2877C10.1957 10.0072 10.5628 9.867 10.9505 9.867C11.2063 9.867 11.429 9.9165 11.6188 10.0155C11.8085 10.1145 11.9818 10.2217 12.1385 10.3372C12.3035 10.4527 12.4562 10.56 12.5964 10.659C12.7449 10.758 12.9058 10.8075 13.079 10.8075C13.2523 10.8075 13.4173 10.725 13.574 10.56C13.7308 10.395 13.8669 10.1392 13.9824 9.79275L15.0714 10.3001C14.8074 10.9436 14.5022 11.4056 14.1557 11.6861C13.8092 11.9584 13.442 12.0945 13.0543 12.0945C12.7985 12.0945 12.5758 12.045 12.386 11.946C12.1963 11.847 12.0189 11.7397 11.8539 11.6242C11.6972 11.5087 11.5445 11.4015 11.396 11.3025C11.2558 11.2035 11.099 11.154 10.9258 11.154C10.7608 11.154 10.5958 11.2365 10.4308 11.4015C10.274 11.5665 10.1379 11.8222 10.0224 12.1687L8.93342 11.6614ZM8.93342 14.52C9.19742 13.8765 9.50267 13.4186 9.84917 13.1464C10.1957 12.8659 10.5628 12.7256 10.9505 12.7256C11.2063 12.7256 11.429 12.7751 11.6188 12.8741C11.8085 12.9731 11.9818 13.0804 12.1385 13.1959C12.3035 13.3114 12.4562 13.4186 12.5964 13.5176C12.7449 13.6166 12.9058 13.6661 13.079 13.6661C13.2523 13.6661 13.4173 13.5836 13.574 13.4186C13.7308 13.2536 13.8669 12.9979 13.9824 12.6514L15.0714 13.1587C14.8074 13.8022 14.5022 14.2642 14.1557 14.5447C13.8092 14.817 13.442 14.9531 13.0543 14.9531C12.7985 14.9531 12.5758 14.9036 12.386 14.8046C12.1963 14.7056 12.0189 14.5984 11.8539 14.4829C11.6972 14.3674 11.5445 14.2601 11.396 14.1611C11.2558 14.0621 11.099 14.0126 10.9258 14.0126C10.7608 14.0126 10.5958 14.0951 10.4308 14.2601C10.274 14.4251 10.1379 14.6809 10.0224 15.0274L8.93342 14.52Z'
      fill='#333333'
    />
    <path
      d='M12 20.4375C7.3401 20.4375 3.5625 16.6599 3.5625 12H2.4375C2.4375 17.2812 6.71878 21.5625 12 21.5625V20.4375ZM20.4375 12C20.4375 16.6599 16.6599 20.4375 12 20.4375V21.5625C17.2812 21.5625 21.5625 17.2812 21.5625 12H20.4375ZM12 3.5625C16.6599 3.5625 20.4375 7.3401 20.4375 12H21.5625C21.5625 6.71878 17.2812 2.4375 12 2.4375V3.5625ZM12 2.4375C6.71878 2.4375 2.4375 6.71878 2.4375 12H3.5625C3.5625 7.3401 7.3401 3.5625 12 3.5625V2.4375Z'
      fill='#444444'
    />
  </IconBase>
))

export const IconViewAccountAddress = forwardRef((props, ref) => (
  <IconBase
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
    {...props}
  >
    <path
      d='M12 20C16.4183 20 20 16.4183 20 12H4C4 16.4183 7.58172 20 12 20Z'
      fill='#1A0066'
    />
    <path
      d='M12 4C7.58172 4 4 7.58172 4 12L20 12C20 7.58172 16.4183 4 12 4Z'
      fill='#E0D7FE'
    />
    <circle cx='12' cy='12' r='3' fill='white' />
  </IconBase>
))

export const IconCopyAccountAddress = forwardRef((props, ref) => (
  <IconBase
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
    {...props}
  >
    <rect x='8' y='4' width='12' height='12' fill='#1A0066' />
    <rect x='4' y='8' width='12' height='12' fill='#E0D7FE' />
  </IconBase>
))

export const IconMessageStatus = forwardRef((props, ref) => (
  <IconBase
    width='24px'
    height='24px'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
    {...props}
  >
    <rect
      x='4'
      y='8'
      width='12'
      height='12'
      fill={
        props.status === 'confirmed'
          ? theme.colors.status.success.background
          : theme.colors.status.pending.background
      }
    />
  </IconBase>
))

IconMessageStatus.propTypes = {
  status: oneOf(['confirmed', 'pending']).isRequired
}

export const IconLedger = forwardRef((props, ref) => (
  <IconBase
    width='40px'
    height='40px'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10.0934 4H17.4067H17.4148C18.8148 4 19.9676 5.15197 19.9676 6.55279V13.866H10.0934V4ZM6.55349 4.00065H7.81386V7.81378H4.00065V6.55344C4.00065 5.15342 5.15345 4.00065 6.55349 4.00065ZM4 10.0934H7.81321V13.9066H4V10.0934ZM17.4479 19.9679H16.1875V16.1869H20.0007V17.4071V17.4151C20.0007 18.8151 18.8487 19.9679 17.4479 19.9679ZM10.0938 16.1869H13.907V20H10.0938V16.1869ZM4 17.4472V16.1869H7.81321V20H6.55284C5.15279 20 4 18.8472 4 17.4472Z'
      fill='#333333'
    />
  </IconBase>
))

export const IconViewAddress = forwardRef((props, ref) => (
  <IconBase
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    ref={ref}
    {...props}
  >
    <rect width='24' height='24' rx='12' fill='white' />
    <rect
      opacity='0.5'
      x='4.5'
      y='7.5'
      width='12'
      height='12'
      rx='6'
      fill='#0A0A0A'
    />
    <rect x='7.5' y='10.5' width='6' height='6' rx='3' fill='#0A0A0A' />
  </IconBase>
))

export const IconEdit = forwardRef((props, ref) => {
  let stroke = 'currentColor'
  if (props?.stroke) {
    const themeColor = resolvePath(theme.colors, props.stroke)
    stroke = themeColor || props.stroke
  }

  return (
    <IconBase
      fill='none'
      stroke={stroke}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      ref={ref}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        fill={props.fill || 'none'}
        strokeWidth='2'
        d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
      />
    </IconBase>
  )
})

IconEdit.propTypes = {
  fill: string,
  stroke: string
}
