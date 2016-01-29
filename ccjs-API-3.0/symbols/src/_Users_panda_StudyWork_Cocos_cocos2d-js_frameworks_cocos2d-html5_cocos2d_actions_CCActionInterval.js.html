<html><head><meta http-equiv="content-type" content="text/html; charset=UTF-8"> <style>
	.KEYW {color: #933;}
	.COMM {color: #bbb; font-style: italic;}
	.NUMB {color: #393;}
	.STRN {color: #393;}
	.REGX {color: #339;}
	.line {border-right: 1px dotted #666; color: #666; font-style: normal;}
	</style></head><body><pre><span class='line'>  1</span> <span class="COMM">/****************************************************************************
<span class='line'>  2</span>  Copyright (c) 2008-2010 Ricardo Quesada
<span class='line'>  3</span>  Copyright (c) 2011-2012 cocos2d-x.org
<span class='line'>  4</span>  Copyright (c) 2013-2014 Chukong Technologies Inc.
<span class='line'>  5</span> 
<span class='line'>  6</span>  http://www.cocos2d-x.org
<span class='line'>  7</span> 
<span class='line'>  8</span>  Permission is hereby granted, free of charge, to any person obtaining a copy
<span class='line'>  9</span>  of this software and associated documentation files (the "Software"), to deal
<span class='line'> 10</span>  in the Software without restriction, including without limitation the rights
<span class='line'> 11</span>  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
<span class='line'> 12</span>  copies of the Software, and to permit persons to whom the Software is
<span class='line'> 13</span>  furnished to do so, subject to the following conditions:
<span class='line'> 14</span> 
<span class='line'> 15</span>  The above copyright notice and this permission notice shall be included in
<span class='line'> 16</span>  all copies or substantial portions of the Software.
<span class='line'> 17</span> 
<span class='line'> 18</span>  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
<span class='line'> 19</span>  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
<span class='line'> 20</span>  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
<span class='line'> 21</span>  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
<span class='line'> 22</span>  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
<span class='line'> 23</span>  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
<span class='line'> 24</span>  THE SOFTWARE.
<span class='line'> 25</span>  ****************************************************************************/</span><span class="WHIT">
<span class='line'> 26</span> 
<span class='line'> 27</span> </span><span class="COMM">/**
<span class='line'> 28</span>  * &lt;p> An interval action is an action that takes place within a certain period of time. &lt;br/>
<span class='line'> 29</span>  * It has an start time, and a finish time. The finish time is the parameter&lt;br/>
<span class='line'> 30</span>  * duration plus the start time.&lt;/p>
<span class='line'> 31</span>  *
<span class='line'> 32</span>  * &lt;p>These CCActionInterval actions have some interesting properties, like:&lt;br/>
<span class='line'> 33</span>  * - They can run normally (default)  &lt;br/>
<span class='line'> 34</span>  * - They can run reversed with the reverse method   &lt;br/>
<span class='line'> 35</span>  * - They can run with the time altered with the Accelerate, AccelDeccel and Speed actions. &lt;/p>
<span class='line'> 36</span>  *
<span class='line'> 37</span>  * &lt;p>For example, you can simulate a Ping Pong effect running the action normally and&lt;br/>
<span class='line'> 38</span>  * then running it again in Reverse mode. &lt;/p>
<span class='line'> 39</span>  *
<span class='line'> 40</span>  * @class
<span class='line'> 41</span>  * @extends cc.FiniteTimeAction
<span class='line'> 42</span>  * @param {Number} d duration in seconds
<span class='line'> 43</span>  * @example
<span class='line'> 44</span>  * var actionInterval = new cc.ActionInterval(3);
<span class='line'> 45</span>  */</span><span class="WHIT">
<span class='line'> 46</span> </span><span class="NAME">cc.ActionInterval</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.FiniteTimeAction.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.ActionInterval# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 47</span> </span><span class="WHIT">    </span><span class="NAME">_elapsed</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 48</span> </span><span class="WHIT">    </span><span class="NAME">_firstTick</span><span class="PUNC">:</span><span class="KEYW">false</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 49</span> </span><span class="WHIT">    </span><span class="NAME">_easeList</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 50</span> </span><span class="WHIT">    </span><span class="NAME">_times</span><span class="PUNC">:</span><span class="NUMB">1</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 51</span> </span><span class="WHIT">    </span><span class="NAME">_repeatForever</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 52</span> </span><span class="WHIT">    </span><span class="NAME">_repeatMethod</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">,</span><span class="COMM">//Compatible with repeat class, Discard after can be deleted</span><span class="WHIT">
<span class='line'> 53</span> </span><span class="WHIT">    </span><span class="NAME">_speed</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 54</span> </span><span class="WHIT">    </span><span class="NAME">_speedMethod</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">,</span><span class="COMM">//Compatible with speed class, Discard after can be deleted</span><span class="WHIT">
<span class='line'> 55</span> 
<span class='line'> 56</span> </span><span class="WHIT">	</span><span class="COMM">/**
<span class='line'> 57</span>      * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
<span class='line'> 58</span> 	 * @param {Number} d duration in seconds
<span class='line'> 59</span> 	 */</span><span class="WHIT">
<span class='line'> 60</span> </span><span class="WHIT">    </span><span class="NAME">ctor</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">d</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 61</span> </span><span class="WHIT">        </span><span class="NAME">this._speed</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 62</span> </span><span class="WHIT">        </span><span class="NAME">this._times</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 63</span> </span><span class="WHIT">        </span><span class="NAME">this._repeatForever</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 64</span> </span><span class="WHIT">        </span><span class="NAME">this.MAX_VALUE</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 65</span> </span><span class="WHIT">        </span><span class="NAME">this._repeatMethod</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="COMM">//Compatible with repeat class, Discard after can be deleted</span><span class="WHIT">
<span class='line'> 66</span> </span><span class="WHIT">        </span><span class="NAME">this._speedMethod</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="COMM">//Compatible with repeat class, Discard after can be deleted</span><span class="WHIT">
<span class='line'> 67</span> </span><span class="WHIT">        </span><span class="NAME">cc.FiniteTimeAction.prototype.ctor.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 68</span> </span><span class="WHIT">		</span><span class="NAME">d</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="NAME">undefined</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">this.initWithDuration</span><span class="PUNC">(</span><span class="NAME">d</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 69</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 70</span> 
<span class='line'> 71</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'> 72</span>      * How many seconds had elapsed since the actions started to run.
<span class='line'> 73</span>      * @return {Number}
<span class='line'> 74</span>      */</span><span class="WHIT">
<span class='line'> 75</span> </span><span class="WHIT">    </span><span class="NAME">getElapsed</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 76</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._elapsed</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 77</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 78</span> 
<span class='line'> 79</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'> 80</span>      * Initializes the action.
<span class='line'> 81</span>      * @param {Number} d duration in seconds
<span class='line'> 82</span>      * @return {Boolean}
<span class='line'> 83</span>      */</span><span class="WHIT">
<span class='line'> 84</span> </span><span class="WHIT">    </span><span class="NAME">initWithDuration</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">d</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 85</span> </span><span class="WHIT">        </span><span class="NAME">this._duration</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">d</span><span class="WHIT"> </span><span class="PUNC">===</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">?</span><span class="WHIT"> </span><span class="NAME">cc.FLT_EPSILON</span><span class="WHIT"> </span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NAME">d</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 86</span> </span><span class="WHIT">        </span><span class="COMM">// prevent division by 0</span><span class="WHIT">
<span class='line'> 87</span> </span><span class="WHIT">        </span><span class="COMM">// This comparison could be in step:, but it might decrease the performance</span><span class="WHIT">
<span class='line'> 88</span> </span><span class="WHIT">        </span><span class="COMM">// by 3% in heavy based action games.</span><span class="WHIT">
<span class='line'> 89</span> </span><span class="WHIT">        </span><span class="NAME">this._elapsed</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 90</span> </span><span class="WHIT">        </span><span class="NAME">this._firstTick</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 91</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 92</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 93</span> 
<span class='line'> 94</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'> 95</span>      * Returns true if the action has finished.
<span class='line'> 96</span>      * @return {Boolean}
<span class='line'> 97</span>      */</span><span class="WHIT">
<span class='line'> 98</span> </span><span class="WHIT">    </span><span class="NAME">isDone</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 99</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this._elapsed</span><span class="WHIT"> </span><span class="PUNC">>=</span><span class="WHIT"> </span><span class="NAME">this._duration</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>100</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>101</span> 
<span class='line'>102</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>103</span>      * Some additional parameters of cloning.
<span class='line'>104</span>      * @param {cc.Action} action
<span class='line'>105</span>      * @private
<span class='line'>106</span>      */</span><span class="WHIT">
<span class='line'>107</span> </span><span class="WHIT">    </span><span class="NAME">_cloneDecoration</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>108</span> </span><span class="WHIT">        </span><span class="NAME">action._repeatForever</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._repeatForever</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>109</span> </span><span class="WHIT">        </span><span class="NAME">action._speed</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._speed</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>110</span> </span><span class="WHIT">        </span><span class="NAME">action._times</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._times</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>111</span> </span><span class="WHIT">        </span><span class="NAME">action._easeList</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._easeList</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>112</span> </span><span class="WHIT">        </span><span class="NAME">action._speedMethod</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._speedMethod</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>113</span> </span><span class="WHIT">        </span><span class="NAME">action._repeatMethod</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._repeatMethod</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>114</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>115</span> 
<span class='line'>116</span> </span><span class="WHIT">    </span><span class="NAME">_reverseEaseList</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>117</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="NAME">this._easeList</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>118</span> </span><span class="WHIT">            </span><span class="NAME">action._easeList</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">[</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>119</span> </span><span class="WHIT">            </span><span class="KEYW">for</span><span class="PUNC">(</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">i</span><span class="PUNC">=</span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="PUNC">&lt;</span><span class="NAME">this._easeList.length</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="PUNC">++</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>120</span> </span><span class="WHIT">                </span><span class="NAME">action._easeList.push</span><span class="PUNC">(</span><span class="NAME">this._easeList</span><span class="PUNC">[</span><span class="NAME">i</span><span class="PUNC">]</span><span class="PUNC">.</span><span class="NAME">reverse</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>121</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>122</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>123</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>124</span> 
<span class='line'>125</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>126</span>      * Returns a new clone of the action.
<span class='line'>127</span>      * @returns {cc.ActionInterval}
<span class='line'>128</span>      */</span><span class="WHIT">
<span class='line'>129</span> </span><span class="WHIT">    </span><span class="NAME">clone</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>130</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.ActionInterval</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>131</span> </span><span class="WHIT">        </span><span class="NAME">this._cloneDecoration</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>132</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>133</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>134</span> 
<span class='line'>135</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>136</span>      * Implementation of ease motion.
<span class='line'>137</span>      *
<span class='line'>138</span>      * @example
<span class='line'>139</span>      * //example
<span class='line'>140</span>      * action.easeing(cc.easeIn(3.0));
<span class='line'>141</span>      * @param {Object} easeObj
<span class='line'>142</span>      * @returns {cc.ActionInterval}
<span class='line'>143</span>      */</span><span class="WHIT">
<span class='line'>144</span> </span><span class="WHIT">    </span><span class="NAME">easing</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">easeObj</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>145</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this._easeList</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>146</span> </span><span class="WHIT">            </span><span class="NAME">this._easeList.length</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>147</span> </span><span class="WHIT">        </span><span class="KEYW">else</span><span class="WHIT">
<span class='line'>148</span> </span><span class="WHIT">            </span><span class="NAME">this._easeList</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">[</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>149</span> </span><span class="WHIT">        </span><span class="KEYW">for</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="NAME">arguments.length</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="PUNC">++</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>150</span> </span><span class="WHIT">            </span><span class="NAME">this._easeList.push</span><span class="PUNC">(</span><span class="NAME">arguments</span><span class="PUNC">[</span><span class="NAME">i</span><span class="PUNC">]</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>151</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">this</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>152</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>153</span> 
<span class='line'>154</span> </span><span class="WHIT">    </span><span class="NAME">_computeEaseTime</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>155</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locList</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._easeList</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>156</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">(</span><span class="PUNC">!</span><span class="NAME">locList</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">||</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">locList.length</span><span class="WHIT"> </span><span class="PUNC">===</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>157</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">dt</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>158</span> </span><span class="WHIT">        </span><span class="KEYW">for</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">n</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">locList.length</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="NAME">n</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="PUNC">++</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>159</span> </span><span class="WHIT">            </span><span class="NAME">dt</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">locList</span><span class="PUNC">[</span><span class="NAME">i</span><span class="PUNC">]</span><span class="PUNC">.</span><span class="NAME">easing</span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>160</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">dt</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>161</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>162</span> 
<span class='line'>163</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>164</span>      * called every frame with it's delta time. &lt;br />
<span class='line'>165</span>      * DON'T override unless you know what you are doing.
<span class='line'>166</span>      *
<span class='line'>167</span>      * @param {Number} dt
<span class='line'>168</span>      */</span><span class="WHIT">
<span class='line'>169</span> </span><span class="WHIT">    </span><span class="NAME">step</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>170</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this._firstTick</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>171</span> </span><span class="WHIT">            </span><span class="NAME">this._firstTick</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>172</span> </span><span class="WHIT">            </span><span class="NAME">this._elapsed</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>173</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT"> </span><span class="KEYW">else</span><span class="WHIT">
<span class='line'>174</span> </span><span class="WHIT">            </span><span class="NAME">this._elapsed</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">dt</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>175</span> 
<span class='line'>176</span> </span><span class="WHIT">        </span><span class="COMM">//this.update((1 > (this._elapsed / this._duration)) ? this._elapsed / this._duration : 1);</span><span class="WHIT">
<span class='line'>177</span> </span><span class="WHIT">        </span><span class="COMM">//this.update(Math.max(0, Math.min(1, this._elapsed / Math.max(this._duration, cc.FLT_EPSILON))));</span><span class="WHIT">
<span class='line'>178</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">t</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._elapsed</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="WHIT"> </span><span class="PUNC">></span><span class="WHIT"> </span><span class="NUMB">0.0000001192092896</span><span class="WHIT"> </span><span class="PUNC">?</span><span class="WHIT"> </span><span class="NAME">this._duration</span><span class="WHIT"> </span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NUMB">0.0000001192092896</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>179</span> </span><span class="WHIT">        </span><span class="NAME">t</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NUMB">1</span><span class="WHIT"> </span><span class="PUNC">></span><span class="WHIT"> </span><span class="NAME">t</span><span class="WHIT"> </span><span class="PUNC">?</span><span class="WHIT"> </span><span class="NAME">t</span><span class="WHIT"> </span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>180</span> </span><span class="WHIT">        </span><span class="NAME">this.update</span><span class="PUNC">(</span><span class="NAME">t</span><span class="WHIT"> </span><span class="PUNC">></span><span class="WHIT"> </span><span class="NUMB">0</span><span class="WHIT"> </span><span class="PUNC">?</span><span class="WHIT"> </span><span class="NAME">t</span><span class="WHIT"> </span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>181</span> 
<span class='line'>182</span> </span><span class="WHIT">        </span><span class="COMM">//Compatible with repeat class, Discard after can be deleted (this._repeatMethod)</span><span class="WHIT">
<span class='line'>183</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="NAME">this._repeatMethod</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">this._times</span><span class="WHIT"> </span><span class="PUNC">></span><span class="WHIT"> </span><span class="NUMB">1</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">this.isDone</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>184</span> </span><span class="WHIT">            </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="PUNC">!</span><span class="NAME">this._repeatForever</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>185</span> </span><span class="WHIT">                </span><span class="NAME">this._times</span><span class="PUNC">--</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>186</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>187</span> </span><span class="WHIT">            </span><span class="COMM">//var diff = locInnerAction.getElapsed() - locInnerAction._duration;</span><span class="WHIT">
<span class='line'>188</span> </span><span class="WHIT">            </span><span class="NAME">this.startWithTarget</span><span class="PUNC">(</span><span class="NAME">this.target</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>189</span> </span><span class="WHIT">            </span><span class="COMM">// to prevent jerk. issue #390 ,1247</span><span class="WHIT">
<span class='line'>190</span> </span><span class="WHIT">            </span><span class="COMM">//this._innerAction.step(0);</span><span class="WHIT">
<span class='line'>191</span> </span><span class="WHIT">            </span><span class="COMM">//this._innerAction.step(diff);</span><span class="WHIT">
<span class='line'>192</span> </span><span class="WHIT">            </span><span class="NAME">this.step</span><span class="PUNC">(</span><span class="NAME">this._elapsed</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">this._duration</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>193</span> 
<span class='line'>194</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>195</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>196</span> 
<span class='line'>197</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>198</span>      * Start this action with target.
<span class='line'>199</span>      * @param {cc.Node} target
<span class='line'>200</span>      */</span><span class="WHIT">
<span class='line'>201</span> </span><span class="WHIT">    </span><span class="NAME">startWithTarget</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">target</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>202</span> </span><span class="WHIT">        </span><span class="NAME">cc.Action.prototype.startWithTarget.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">target</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>203</span> </span><span class="WHIT">        </span><span class="NAME">this._elapsed</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>204</span> </span><span class="WHIT">        </span><span class="NAME">this._firstTick</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>205</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>206</span> 
<span class='line'>207</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>208</span>      * returns a reversed action. &lt;br />
<span class='line'>209</span>      * Will be overwrite.
<span class='line'>210</span>      *
<span class='line'>211</span>      * @return {null}
<span class='line'>212</span>      */</span><span class="WHIT">
<span class='line'>213</span> </span><span class="WHIT">    </span><span class="NAME">reverse</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>214</span> </span><span class="WHIT">        </span><span class="NAME">cc.log</span><span class="PUNC">(</span><span class="STRN">"cc.IntervalAction: reverse not implemented."</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>215</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>216</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>217</span> 
<span class='line'>218</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>219</span>      * Set amplitude rate.
<span class='line'>220</span>      * @warning It should be overridden in subclass.
<span class='line'>221</span>      * @param {Number} amp
<span class='line'>222</span>      */</span><span class="WHIT">
<span class='line'>223</span> </span><span class="WHIT">    </span><span class="NAME">setAmplitudeRate</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">amp</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>224</span> </span><span class="WHIT">        </span><span class="COMM">// Abstract class needs implementation</span><span class="WHIT">
<span class='line'>225</span> </span><span class="WHIT">        </span><span class="NAME">cc.log</span><span class="PUNC">(</span><span class="STRN">"cc.ActionInterval.setAmplitudeRate(): it should be overridden in subclass."</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>226</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>227</span> 
<span class='line'>228</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>229</span>      * Get amplitude rate.
<span class='line'>230</span>      * @warning It should be overridden in subclass.
<span class='line'>231</span>      * @return {Number} 0
<span class='line'>232</span>      */</span><span class="WHIT">
<span class='line'>233</span> </span><span class="WHIT">    </span><span class="NAME">getAmplitudeRate</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>234</span> </span><span class="WHIT">        </span><span class="COMM">// Abstract class needs implementation</span><span class="WHIT">
<span class='line'>235</span> </span><span class="WHIT">        </span><span class="NAME">cc.log</span><span class="PUNC">(</span><span class="STRN">"cc.ActionInterval.getAmplitudeRate(): it should be overridden in subclass."</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>236</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>237</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>238</span> 
<span class='line'>239</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>240</span>      * Changes the speed of an action, making it take longer (speed>1)
<span class='line'>241</span>      * or less (speed&lt;1) time. &lt;br/>
<span class='line'>242</span>      * Useful to simulate 'slow motion' or 'fast forward' effect.
<span class='line'>243</span>      *
<span class='line'>244</span>      * @param speed
<span class='line'>245</span>      * @returns {cc.Action}
<span class='line'>246</span>      */</span><span class="WHIT">
<span class='line'>247</span> </span><span class="WHIT">    </span><span class="NAME">speed</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="PUNC">(</span><span class="NAME">speed</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>248</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="NAME">speed</span><span class="WHIT"> </span><span class="PUNC">&lt;=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>249</span> </span><span class="WHIT">            </span><span class="NAME">cc.log</span><span class="PUNC">(</span><span class="STRN">"The speed parameter error"</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>250</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">this</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>251</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>252</span> 
<span class='line'>253</span> </span><span class="WHIT">        </span><span class="NAME">this._speedMethod</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="COMM">//Compatible with repeat class, Discard after can be deleted</span><span class="WHIT">
<span class='line'>254</span> </span><span class="WHIT">        </span><span class="NAME">this._speed</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">speed</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>255</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">this</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>256</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>257</span> 
<span class='line'>258</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>259</span>      * Get this action speed.
<span class='line'>260</span>      * @return {Number}
<span class='line'>261</span>      */</span><span class="WHIT">
<span class='line'>262</span> </span><span class="WHIT">    </span><span class="NAME">getSpeed</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>263</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._speed</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>264</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>265</span> 
<span class='line'>266</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>267</span>      * Set this action speed.
<span class='line'>268</span>      * @param {Number} speed
<span class='line'>269</span>      * @returns {cc.ActionInterval}
<span class='line'>270</span>      */</span><span class="WHIT">
<span class='line'>271</span> </span><span class="WHIT">    </span><span class="NAME">setSpeed</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="PUNC">(</span><span class="NAME">speed</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>272</span> </span><span class="WHIT">        </span><span class="NAME">this._speed</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">speed</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>273</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">this</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>274</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>275</span> 
<span class='line'>276</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>277</span>      * Repeats an action a number of times.
<span class='line'>278</span>      * To repeat an action forever use the CCRepeatForever action.
<span class='line'>279</span>      * @param times
<span class='line'>280</span>      * @returns {cc.ActionInterval}
<span class='line'>281</span>      */</span><span class="WHIT">
<span class='line'>282</span> </span><span class="WHIT">    </span><span class="NAME">repeat</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="PUNC">(</span><span class="NAME">times</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>283</span> </span><span class="WHIT">        </span><span class="NAME">times</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">Math.round</span><span class="PUNC">(</span><span class="NAME">times</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>284</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="NAME">isNaN</span><span class="PUNC">(</span><span class="NAME">times</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">||</span><span class="WHIT"> </span><span class="NAME">times</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>285</span> </span><span class="WHIT">            </span><span class="NAME">cc.log</span><span class="PUNC">(</span><span class="STRN">"The repeat parameter error"</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>286</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">this</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>287</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>288</span> </span><span class="WHIT">        </span><span class="NAME">this._repeatMethod</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="COMM">//Compatible with repeat class, Discard after can be deleted</span><span class="WHIT">
<span class='line'>289</span> </span><span class="WHIT">        </span><span class="NAME">this._times</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">times</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>290</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">this</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>291</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>292</span> 
<span class='line'>293</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>294</span>      * Repeats an action for ever.  &lt;br/>
<span class='line'>295</span>      * To repeat the an action for a limited number of times use the Repeat action. &lt;br/>
<span class='line'>296</span>      * @returns {cc.ActionInterval}
<span class='line'>297</span>      */</span><span class="WHIT">
<span class='line'>298</span> </span><span class="WHIT">    </span><span class="NAME">repeatForever</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>299</span> </span><span class="WHIT">        </span><span class="NAME">this._repeatMethod</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="COMM">//Compatible with repeat class, Discard after can be deleted</span><span class="WHIT">
<span class='line'>300</span> </span><span class="WHIT">        </span><span class="NAME">this._times</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.MAX_VALUE</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>301</span> </span><span class="WHIT">        </span><span class="NAME">this._repeatForever</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>302</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">this</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>303</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>304</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>305</span> 
<span class='line'>306</span> </span><span class="COMM">/**
<span class='line'>307</span>  * An interval action is an action that takes place within a certain period of time.
<span class='line'>308</span>  * @function
<span class='line'>309</span>  * @param {Number} d duration in seconds
<span class='line'>310</span>  * @return {cc.ActionInterval}
<span class='line'>311</span>  * @example
<span class='line'>312</span>  * // example
<span class='line'>313</span>  * var actionInterval = cc.actionInterval(3);
<span class='line'>314</span>  */</span><span class="WHIT">
<span class='line'>315</span> </span><span class="NAME">cc.actionInterval</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">d</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>316</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.ActionInterval</span><span class="PUNC">(</span><span class="NAME">d</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>317</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>318</span> 
<span class='line'>319</span> </span><span class="COMM">/**
<span class='line'>320</span>  * Please use cc.actionInterval instead.
<span class='line'>321</span>  * An interval action is an action that takes place within a certain period of time.
<span class='line'>322</span>  * @static
<span class='line'>323</span>  * @deprecated since v3.0 &lt;br /> Please use cc.actionInterval instead.
<span class='line'>324</span>  * @param {Number} d duration in seconds
<span class='line'>325</span>  * @return {cc.ActionInterval}
<span class='line'>326</span>  */</span><span class="WHIT">
<span class='line'>327</span> </span><span class="NAME">cc.ActionInterval.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.actionInterval</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>328</span> 
<span class='line'>329</span> </span><span class="COMM">/**
<span class='line'>330</span>  * Runs actions sequentially, one after another.
<span class='line'>331</span>  * @class
<span class='line'>332</span>  * @extends cc.ActionInterval
<span class='line'>333</span>  * @param {Array|cc.FiniteTimeAction} tempArray
<span class='line'>334</span>  * @example
<span class='line'>335</span>  * // create sequence with actions
<span class='line'>336</span>  * var seq = new cc.Sequence(act1, act2);
<span class='line'>337</span>  *
<span class='line'>338</span>  * // create sequence with array
<span class='line'>339</span>  * var seq = new cc.Sequence(actArray);
<span class='line'>340</span>  */</span><span class="WHIT">
<span class='line'>341</span> </span><span class="NAME">cc.Sequence</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.ActionInterval.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.Sequence# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>342</span> </span><span class="WHIT">    </span><span class="NAME">_actions</span><span class="PUNC">:</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>343</span> </span><span class="WHIT">    </span><span class="NAME">_split</span><span class="PUNC">:</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>344</span> </span><span class="WHIT">    </span><span class="NAME">_last</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>345</span> 
<span class='line'>346</span> </span><span class="WHIT">	</span><span class="COMM">/**
<span class='line'>347</span>      * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. &lt;br />
<span class='line'>348</span>      * Create an array of sequenceable actions.
<span class='line'>349</span> 	 * @param {Array|cc.FiniteTimeAction} tempArray
<span class='line'>350</span> 	 */</span><span class="WHIT">
<span class='line'>351</span> </span><span class="WHIT">    </span><span class="NAME">ctor</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">tempArray</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>352</span> </span><span class="WHIT">        </span><span class="NAME">cc.ActionInterval.prototype.ctor.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>353</span> </span><span class="WHIT">        </span><span class="NAME">this._actions</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">[</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>354</span> 
<span class='line'>355</span> </span><span class="WHIT">		</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">paramArray</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">tempArray</span><span class="WHIT"> </span><span class="KEYW">instanceof</span><span class="WHIT"> </span><span class="NAME">Array</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">?</span><span class="WHIT"> </span><span class="NAME">tempArray</span><span class="WHIT"> </span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NAME">arguments</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>356</span> </span><span class="WHIT">		</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">last</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">paramArray.length</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>357</span> </span><span class="WHIT">		</span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">(</span><span class="NAME">last</span><span class="WHIT"> </span><span class="PUNC">>=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">paramArray</span><span class="PUNC">[</span><span class="NAME">last</span><span class="PUNC">]</span><span class="WHIT"> </span><span class="PUNC">==</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>358</span> </span><span class="WHIT">			</span><span class="NAME">cc.log</span><span class="PUNC">(</span><span class="STRN">"parameters should not be ending with null in Javascript"</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>359</span> 
<span class='line'>360</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">last</span><span class="WHIT"> </span><span class="PUNC">>=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>361</span> </span><span class="WHIT">            </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">prev</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">paramArray</span><span class="PUNC">[</span><span class="NUMB">0</span><span class="PUNC">]</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">action1</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>362</span> </span><span class="WHIT">            </span><span class="KEYW">for</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="NAME">last</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="PUNC">++</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>363</span> </span><span class="WHIT">                </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">paramArray</span><span class="PUNC">[</span><span class="NAME">i</span><span class="PUNC">]</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>364</span> </span><span class="WHIT">                    </span><span class="NAME">action1</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">prev</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>365</span> </span><span class="WHIT">                    </span><span class="NAME">prev</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Sequence._actionOneTwo</span><span class="PUNC">(</span><span class="NAME">action1</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">paramArray</span><span class="PUNC">[</span><span class="NAME">i</span><span class="PUNC">]</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>366</span> </span><span class="WHIT">                </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>367</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>368</span> </span><span class="WHIT">            </span><span class="NAME">this.initWithTwoActions</span><span class="PUNC">(</span><span class="NAME">prev</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">paramArray</span><span class="PUNC">[</span><span class="NAME">last</span><span class="PUNC">]</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>369</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>370</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>371</span> 
<span class='line'>372</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>373</span>      * Initializes the action &lt;br/>
<span class='line'>374</span>      * @param {cc.FiniteTimeAction} actionOne
<span class='line'>375</span>      * @param {cc.FiniteTimeAction} actionTwo
<span class='line'>376</span>      * @return {Boolean}
<span class='line'>377</span>      */</span><span class="WHIT">
<span class='line'>378</span> </span><span class="WHIT">    </span><span class="NAME">initWithTwoActions</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">actionOne</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">actionTwo</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>379</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="PUNC">!</span><span class="NAME">actionOne</span><span class="WHIT"> </span><span class="PUNC">||</span><span class="WHIT"> </span><span class="PUNC">!</span><span class="NAME">actionTwo</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>380</span> </span><span class="WHIT">            </span><span class="KEYW">throw</span><span class="WHIT"> </span><span class="STRN">"cc.Sequence.initWithTwoActions(): arguments must all be non nil"</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>381</span> 
<span class='line'>382</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">d</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">actionOne._duration</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NAME">actionTwo._duration</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>383</span> </span><span class="WHIT">        </span><span class="NAME">this.initWithDuration</span><span class="PUNC">(</span><span class="NAME">d</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>384</span> 
<span class='line'>385</span> </span><span class="WHIT">        </span><span class="NAME">this._actions</span><span class="PUNC">[</span><span class="NUMB">0</span><span class="PUNC">]</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">actionOne</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>386</span> </span><span class="WHIT">        </span><span class="NAME">this._actions</span><span class="PUNC">[</span><span class="NUMB">1</span><span class="PUNC">]</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">actionTwo</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>387</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>388</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>389</span> 
<span class='line'>390</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>391</span>      * returns a new clone of the action
<span class='line'>392</span>      * @returns {cc.Sequence}
<span class='line'>393</span>      */</span><span class="WHIT">
<span class='line'>394</span> </span><span class="WHIT">    </span><span class="NAME">clone</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>395</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.Sequence</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>396</span> </span><span class="WHIT">        </span><span class="NAME">this._cloneDecoration</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>397</span> </span><span class="WHIT">        </span><span class="NAME">action.initWithTwoActions</span><span class="PUNC">(</span><span class="NAME">this._actions</span><span class="PUNC">[</span><span class="NUMB">0</span><span class="PUNC">]</span><span class="PUNC">.</span><span class="NAME">clone</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._actions</span><span class="PUNC">[</span><span class="NUMB">1</span><span class="PUNC">]</span><span class="PUNC">.</span><span class="NAME">clone</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>398</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>399</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>400</span> 
<span class='line'>401</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>402</span>      * Start the action with target.
<span class='line'>403</span>      * @param {cc.Node} target
<span class='line'>404</span>      */</span><span class="WHIT">
<span class='line'>405</span> </span><span class="WHIT">    </span><span class="NAME">startWithTarget</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">target</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>406</span> </span><span class="WHIT">        </span><span class="NAME">cc.ActionInterval.prototype.startWithTarget.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">target</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>407</span> </span><span class="WHIT">        </span><span class="NAME">this._split</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._actions</span><span class="PUNC">[</span><span class="NUMB">0</span><span class="PUNC">]</span><span class="PUNC">.</span><span class="NAME">_duration</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NAME">this._duration</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>408</span> </span><span class="WHIT">        </span><span class="NAME">this._last</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="NUMB">1</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>409</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>410</span> 
<span class='line'>411</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>412</span>      * stop the action.
<span class='line'>413</span>      */</span><span class="WHIT">
<span class='line'>414</span> </span><span class="WHIT">    </span><span class="NAME">stop</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>415</span> </span><span class="WHIT">        </span><span class="COMM">// Issue #1305</span><span class="WHIT">
<span class='line'>416</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this._last</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="NUMB">1</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>417</span> </span><span class="WHIT">            </span><span class="NAME">this._actions</span><span class="PUNC">[</span><span class="NAME">this._last</span><span class="PUNC">]</span><span class="PUNC">.</span><span class="NAME">stop</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>418</span> </span><span class="WHIT">        </span><span class="NAME">cc.Action.prototype.stop.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>419</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>420</span> 
<span class='line'>421</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>422</span>      * Called once per frame. Time is the number of seconds of a frame interval.
<span class='line'>423</span>      * @param {Number}  dt
<span class='line'>424</span>      */</span><span class="WHIT">
<span class='line'>425</span> </span><span class="WHIT">    </span><span class="NAME">update</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>426</span> </span><span class="WHIT">        </span><span class="NAME">dt</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._computeEaseTime</span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>427</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">new_t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">found</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>428</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locSplit</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._split</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">locActions</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._actions</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">locLast</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._last</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>429</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">dt</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="NAME">locSplit</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>430</span> </span><span class="WHIT">            </span><span class="COMM">// action[0]</span><span class="WHIT">
<span class='line'>431</span> </span><span class="WHIT">            </span><span class="NAME">new_t</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">locSplit</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">?</span><span class="WHIT"> </span><span class="NAME">dt</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NAME">locSplit</span><span class="WHIT"> </span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>432</span> 
<span class='line'>433</span> </span><span class="WHIT">            </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">found</span><span class="WHIT"> </span><span class="PUNC">===</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">locLast</span><span class="WHIT"> </span><span class="PUNC">===</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>434</span> </span><span class="WHIT">                </span><span class="COMM">// Reverse mode ?</span><span class="WHIT">
<span class='line'>435</span> </span><span class="WHIT">                </span><span class="COMM">// XXX: Bug. this case doesn't contemplate when _last==-1, found=0 and in "reverse mode"</span><span class="WHIT">
<span class='line'>436</span> </span><span class="WHIT">                </span><span class="COMM">// since it will require a hack to know if an action is on reverse mode or not.</span><span class="WHIT">
<span class='line'>437</span> </span><span class="WHIT">                </span><span class="COMM">// "step" should be overriden, and the "reverseMode" value propagated to inner Sequences.</span><span class="WHIT">
<span class='line'>438</span> </span><span class="WHIT">                </span><span class="NAME">locActions</span><span class="PUNC">[</span><span class="NUMB">1</span><span class="PUNC">]</span><span class="PUNC">.</span><span class="NAME">update</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>439</span> </span><span class="WHIT">                </span><span class="NAME">locActions</span><span class="PUNC">[</span><span class="NUMB">1</span><span class="PUNC">]</span><span class="PUNC">.</span><span class="NAME">stop</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>440</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>441</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT"> </span><span class="KEYW">else</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>442</span> </span><span class="WHIT">            </span><span class="COMM">// action[1]</span><span class="WHIT">
<span class='line'>443</span> </span><span class="WHIT">            </span><span class="NAME">found</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>444</span> </span><span class="WHIT">            </span><span class="NAME">new_t</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">locSplit</span><span class="WHIT"> </span><span class="PUNC">===</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">?</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="WHIT"> </span><span class="PUNC">:</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">dt</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">locSplit</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NUMB">1</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">locSplit</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>445</span> 
<span class='line'>446</span> </span><span class="WHIT">            </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">locLast</span><span class="WHIT"> </span><span class="PUNC">===</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="NUMB">1</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>447</span> </span><span class="WHIT">                </span><span class="COMM">// action[0] was skipped, execute it.</span><span class="WHIT">
<span class='line'>448</span> </span><span class="WHIT">                </span><span class="NAME">locActions</span><span class="PUNC">[</span><span class="NUMB">0</span><span class="PUNC">]</span><span class="PUNC">.</span><span class="NAME">startWithTarget</span><span class="PUNC">(</span><span class="NAME">this.target</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>449</span> </span><span class="WHIT">                </span><span class="NAME">locActions</span><span class="PUNC">[</span><span class="NUMB">0</span><span class="PUNC">]</span><span class="PUNC">.</span><span class="NAME">update</span><span class="PUNC">(</span><span class="NUMB">1</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>450</span> </span><span class="WHIT">                </span><span class="NAME">locActions</span><span class="PUNC">[</span><span class="NUMB">0</span><span class="PUNC">]</span><span class="PUNC">.</span><span class="NAME">stop</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>451</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>452</span> </span><span class="WHIT">            </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">!</span><span class="NAME">locLast</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>453</span> </span><span class="WHIT">                </span><span class="COMM">// switching to action 1. stop action 0.</span><span class="WHIT">
<span class='line'>454</span> </span><span class="WHIT">                </span><span class="NAME">locActions</span><span class="PUNC">[</span><span class="NUMB">0</span><span class="PUNC">]</span><span class="PUNC">.</span><span class="NAME">update</span><span class="PUNC">(</span><span class="NUMB">1</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>455</span> </span><span class="WHIT">                </span><span class="NAME">locActions</span><span class="PUNC">[</span><span class="NUMB">0</span><span class="PUNC">]</span><span class="PUNC">.</span><span class="NAME">stop</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>456</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>457</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>458</span> 
<span class='line'>459</span> </span><span class="WHIT">        </span><span class="COMM">// Last action found and it is done.</span><span class="WHIT">
<span class='line'>460</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">locLast</span><span class="WHIT"> </span><span class="PUNC">===</span><span class="WHIT"> </span><span class="NAME">found</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">locActions</span><span class="PUNC">[</span><span class="NAME">found</span><span class="PUNC">]</span><span class="PUNC">.</span><span class="NAME">isDone</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>461</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>462</span> 
<span class='line'>463</span> </span><span class="WHIT">        </span><span class="COMM">// Last action found and it is done</span><span class="WHIT">
<span class='line'>464</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">locLast</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="NAME">found</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>465</span> </span><span class="WHIT">            </span><span class="NAME">locActions</span><span class="PUNC">[</span><span class="NAME">found</span><span class="PUNC">]</span><span class="PUNC">.</span><span class="NAME">startWithTarget</span><span class="PUNC">(</span><span class="NAME">this.target</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>466</span> 
<span class='line'>467</span> </span><span class="WHIT">        </span><span class="NAME">locActions</span><span class="PUNC">[</span><span class="NAME">found</span><span class="PUNC">]</span><span class="PUNC">.</span><span class="NAME">update</span><span class="PUNC">(</span><span class="NAME">new_t</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>468</span> </span><span class="WHIT">        </span><span class="NAME">this._last</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">found</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>469</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>470</span> 
<span class='line'>471</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>472</span>      * Returns a reversed action.
<span class='line'>473</span>      * @return {cc.Sequence}
<span class='line'>474</span>      */</span><span class="WHIT">
<span class='line'>475</span> </span><span class="WHIT">    </span><span class="NAME">reverse</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>476</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Sequence._actionOneTwo</span><span class="PUNC">(</span><span class="NAME">this._actions</span><span class="PUNC">[</span><span class="NUMB">1</span><span class="PUNC">]</span><span class="PUNC">.</span><span class="NAME">reverse</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._actions</span><span class="PUNC">[</span><span class="NUMB">0</span><span class="PUNC">]</span><span class="PUNC">.</span><span class="NAME">reverse</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>477</span> </span><span class="WHIT">        </span><span class="NAME">this._cloneDecoration</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>478</span> </span><span class="WHIT">        </span><span class="NAME">this._reverseEaseList</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>479</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>480</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>481</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>482</span> 
<span class='line'>483</span> </span><span class="COMM">/** helper constructor to create an array of sequenceable actions
<span class='line'>484</span>  * @function
<span class='line'>485</span>  * @param {Array|cc.FiniteTimeAction} tempArray
<span class='line'>486</span>  * @return {cc.Sequence}
<span class='line'>487</span>  * @example
<span class='line'>488</span>  * // example
<span class='line'>489</span>  * // create sequence with actions
<span class='line'>490</span>  * var seq = cc.sequence(act1, act2);
<span class='line'>491</span>  *
<span class='line'>492</span>  * // create sequence with array
<span class='line'>493</span>  * var seq = cc.sequence(actArray);
<span class='line'>494</span>  */</span><span class="WHIT">
<span class='line'>495</span> </span><span class="NAME">cc.sequence</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="COMM">/*Multiple Arguments*/</span><span class="NAME">tempArray</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>496</span> </span><span class="WHIT">    </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">paramArray</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">tempArray</span><span class="WHIT"> </span><span class="KEYW">instanceof</span><span class="WHIT"> </span><span class="NAME">Array</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">?</span><span class="WHIT"> </span><span class="NAME">tempArray</span><span class="WHIT"> </span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NAME">arguments</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>497</span> </span><span class="WHIT">    </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">(</span><span class="NAME">paramArray.length</span><span class="WHIT"> </span><span class="PUNC">></span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">paramArray</span><span class="PUNC">[</span><span class="NAME">paramArray.length</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">]</span><span class="WHIT"> </span><span class="PUNC">==</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>498</span> </span><span class="WHIT">        </span><span class="NAME">cc.log</span><span class="PUNC">(</span><span class="STRN">"parameters should not be ending with null in Javascript"</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>499</span> 
<span class='line'>500</span> </span><span class="WHIT">    </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">prev</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">paramArray</span><span class="PUNC">[</span><span class="NUMB">0</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>501</span> </span><span class="WHIT">    </span><span class="KEYW">for</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="NAME">paramArray.length</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="PUNC">++</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>502</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">paramArray</span><span class="PUNC">[</span><span class="NAME">i</span><span class="PUNC">]</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>503</span> </span><span class="WHIT">            </span><span class="NAME">prev</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Sequence._actionOneTwo</span><span class="PUNC">(</span><span class="NAME">prev</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">paramArray</span><span class="PUNC">[</span><span class="NAME">i</span><span class="PUNC">]</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>504</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>505</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">prev</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>506</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>507</span> 
<span class='line'>508</span> </span><span class="COMM">/**
<span class='line'>509</span>  * Please use cc.sequence instead.
<span class='line'>510</span>  * helper constructor to create an array of sequenceable actions
<span class='line'>511</span>  * @static
<span class='line'>512</span>  * @deprecated since v3.0 &lt;br /> Please use cc.sequence instead.
<span class='line'>513</span>  * @param {Array|cc.FiniteTimeAction} tempArray
<span class='line'>514</span>  * @return {cc.Sequence}
<span class='line'>515</span>  */</span><span class="WHIT">
<span class='line'>516</span> </span><span class="NAME">cc.Sequence.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.sequence</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>517</span> 
<span class='line'>518</span> </span><span class="COMM">/** creates the action
<span class='line'>519</span>  * @param {cc.FiniteTimeAction} actionOne
<span class='line'>520</span>  * @param {cc.FiniteTimeAction} actionTwo
<span class='line'>521</span>  * @return {cc.Sequence}
<span class='line'>522</span>  * @private
<span class='line'>523</span>  */</span><span class="WHIT">
<span class='line'>524</span> </span><span class="NAME">cc.Sequence._actionOneTwo</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">actionOne</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">actionTwo</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>525</span> </span><span class="WHIT">    </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">sequence</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.Sequence</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>526</span> </span><span class="WHIT">    </span><span class="NAME">sequence.initWithTwoActions</span><span class="PUNC">(</span><span class="NAME">actionOne</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">actionTwo</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>527</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">sequence</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>528</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>529</span> 
<span class='line'>530</span> </span><span class="COMM">/**
<span class='line'>531</span>  * Repeats an action a number of times.
<span class='line'>532</span>  * To repeat an action forever use the CCRepeatForever action.
<span class='line'>533</span>  * @class
<span class='line'>534</span>  * @extends cc.ActionInterval
<span class='line'>535</span>  * @param {cc.FiniteTimeAction} action
<span class='line'>536</span>  * @param {Number} times
<span class='line'>537</span>  * @example
<span class='line'>538</span>  * var rep = new cc.Repeat(cc.sequence(jump2, jump1), 5);
<span class='line'>539</span>  */</span><span class="WHIT">
<span class='line'>540</span> </span><span class="NAME">cc.Repeat</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.ActionInterval.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.Repeat# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>541</span> </span><span class="WHIT">    </span><span class="NAME">_times</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>542</span> </span><span class="WHIT">    </span><span class="NAME">_total</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>543</span> </span><span class="WHIT">    </span><span class="NAME">_nextDt</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>544</span> </span><span class="WHIT">    </span><span class="NAME">_actionInstant</span><span class="PUNC">:</span><span class="KEYW">false</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>545</span> </span><span class="WHIT">    </span><span class="NAME">_innerAction</span><span class="PUNC">:</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="COMM">//CCFiniteTimeAction</span><span class="WHIT">
<span class='line'>546</span> 
<span class='line'>547</span> </span><span class="WHIT">	</span><span class="COMM">/**
<span class='line'>548</span>      * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. &lt;br />
<span class='line'>549</span> 	 * Creates a Repeat action. Times is an unsigned integer between 1 and pow(2,30).
<span class='line'>550</span> 	 * @param {cc.FiniteTimeAction} action
<span class='line'>551</span> 	 * @param {Number} times
<span class='line'>552</span> 	 */</span><span class="WHIT">
<span class='line'>553</span> </span><span class="WHIT">    </span><span class="NAME">ctor</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">times</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>554</span> </span><span class="WHIT">        </span><span class="NAME">cc.ActionInterval.prototype.ctor.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>555</span> 
<span class='line'>556</span> </span><span class="WHIT">		</span><span class="NAME">times</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="NAME">undefined</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">this.initWithAction</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">times</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>557</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>558</span> 
<span class='line'>559</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>560</span>      * @param {cc.FiniteTimeAction} action
<span class='line'>561</span>      * @param {Number} times
<span class='line'>562</span>      * @return {Boolean}
<span class='line'>563</span>      */</span><span class="WHIT">
<span class='line'>564</span> </span><span class="WHIT">    </span><span class="NAME">initWithAction</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">times</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>565</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">duration</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">action._duration</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">times</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>566</span> 
<span class='line'>567</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this.initWithDuration</span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>568</span> </span><span class="WHIT">            </span><span class="NAME">this._times</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">times</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>569</span> </span><span class="WHIT">            </span><span class="NAME">this._innerAction</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>570</span> </span><span class="WHIT">            </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">action</span><span class="WHIT"> </span><span class="KEYW">instanceof</span><span class="WHIT"> </span><span class="NAME">cc.ActionInstant</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>571</span> </span><span class="WHIT">                </span><span class="NAME">this._actionInstant</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>572</span> </span><span class="WHIT">                </span><span class="NAME">this._times</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>573</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>574</span> </span><span class="WHIT">            </span><span class="NAME">this._total</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>575</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>576</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>577</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>578</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>579</span> 
<span class='line'>580</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>581</span>      * returns a new clone of the action
<span class='line'>582</span>      * @returns {cc.Repeat}
<span class='line'>583</span>      */</span><span class="WHIT">
<span class='line'>584</span> </span><span class="WHIT">    </span><span class="NAME">clone</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>585</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.Repeat</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>586</span> </span><span class="WHIT">        </span><span class="NAME">this._cloneDecoration</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>587</span> </span><span class="WHIT">        </span><span class="NAME">action.initWithAction</span><span class="PUNC">(</span><span class="NAME">this._innerAction.clone</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._times</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>588</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>589</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>590</span> 
<span class='line'>591</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>592</span>      * Start the action with target.
<span class='line'>593</span>      * @param {cc.Node} target
<span class='line'>594</span>      */</span><span class="WHIT">
<span class='line'>595</span> </span><span class="WHIT">    </span><span class="NAME">startWithTarget</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">target</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>596</span> </span><span class="WHIT">        </span><span class="NAME">this._total</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>597</span> </span><span class="WHIT">        </span><span class="NAME">this._nextDt</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._innerAction._duration</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NAME">this._duration</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>598</span> </span><span class="WHIT">        </span><span class="NAME">cc.ActionInterval.prototype.startWithTarget.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">target</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>599</span> </span><span class="WHIT">        </span><span class="NAME">this._innerAction.startWithTarget</span><span class="PUNC">(</span><span class="NAME">target</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>600</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>601</span> 
<span class='line'>602</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>603</span>      * stop the action
<span class='line'>604</span>      */</span><span class="WHIT">
<span class='line'>605</span> </span><span class="WHIT">    </span><span class="NAME">stop</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>606</span> </span><span class="WHIT">        </span><span class="NAME">this._innerAction.stop</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>607</span> </span><span class="WHIT">        </span><span class="NAME">cc.Action.prototype.stop.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>608</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>609</span> 
<span class='line'>610</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>611</span>      * Called once per frame. Time is the number of seconds of a frame interval.
<span class='line'>612</span>      * @param {Number}  dt
<span class='line'>613</span>      */</span><span class="WHIT">
<span class='line'>614</span> </span><span class="WHIT">    </span><span class="NAME">update</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>615</span> </span><span class="WHIT">        </span><span class="NAME">dt</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._computeEaseTime</span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>616</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locInnerAction</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._innerAction</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>617</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locDuration</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._duration</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>618</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locTimes</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._times</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>619</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locNextDt</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._nextDt</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>620</span> 
<span class='line'>621</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">dt</span><span class="WHIT"> </span><span class="PUNC">>=</span><span class="WHIT"> </span><span class="NAME">locNextDt</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>622</span> </span><span class="WHIT">            </span><span class="KEYW">while</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">dt</span><span class="WHIT"> </span><span class="PUNC">></span><span class="WHIT"> </span><span class="NAME">locNextDt</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">this._total</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="NAME">locTimes</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>623</span> </span><span class="WHIT">                </span><span class="NAME">locInnerAction.update</span><span class="PUNC">(</span><span class="NUMB">1</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>624</span> </span><span class="WHIT">                </span><span class="NAME">this._total</span><span class="PUNC">++</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>625</span> </span><span class="WHIT">                </span><span class="NAME">locInnerAction.stop</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>626</span> </span><span class="WHIT">                </span><span class="NAME">locInnerAction.startWithTarget</span><span class="PUNC">(</span><span class="NAME">this.target</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>627</span> </span><span class="WHIT">                </span><span class="NAME">locNextDt</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">locInnerAction._duration</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NAME">locDuration</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>628</span> </span><span class="WHIT">                </span><span class="NAME">this._nextDt</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">locNextDt</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>629</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>630</span> 
<span class='line'>631</span> </span><span class="WHIT">            </span><span class="COMM">// fix for issue #1288, incorrect end value of repeat</span><span class="WHIT">
<span class='line'>632</span> </span><span class="WHIT">            </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">dt</span><span class="WHIT"> </span><span class="PUNC">>=</span><span class="WHIT"> </span><span class="NUMB">1.0</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">this._total</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="NAME">locTimes</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>633</span> </span><span class="WHIT">                </span><span class="NAME">this._total</span><span class="PUNC">++</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>634</span> 
<span class='line'>635</span> </span><span class="WHIT">            </span><span class="COMM">// don't set a instant action back or update it, it has no use because it has no duration</span><span class="WHIT">
<span class='line'>636</span> </span><span class="WHIT">            </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">!</span><span class="NAME">this._actionInstant</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>637</span> </span><span class="WHIT">                </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this._total</span><span class="WHIT"> </span><span class="PUNC">===</span><span class="WHIT"> </span><span class="NAME">locTimes</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>638</span> </span><span class="WHIT">                    </span><span class="NAME">locInnerAction.update</span><span class="PUNC">(</span><span class="NUMB">1</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>639</span> </span><span class="WHIT">                    </span><span class="NAME">locInnerAction.stop</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>640</span> </span><span class="WHIT">                </span><span class="PUNC">}</span><span class="WHIT"> </span><span class="KEYW">else</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>641</span> </span><span class="WHIT">                    </span><span class="COMM">// issue #390 prevent jerk, use right update</span><span class="WHIT">
<span class='line'>642</span> </span><span class="WHIT">                    </span><span class="NAME">locInnerAction.update</span><span class="PUNC">(</span><span class="NAME">dt</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">locNextDt</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">locInnerAction._duration</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NAME">locDuration</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>643</span> </span><span class="WHIT">                </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>644</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>645</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT"> </span><span class="KEYW">else</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>646</span> </span><span class="WHIT">            </span><span class="NAME">locInnerAction.update</span><span class="PUNC">(</span><span class="PUNC">(</span><span class="NAME">dt</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">locTimes</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">%</span><span class="WHIT"> </span><span class="NUMB">1.0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>647</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>648</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>649</span> 
<span class='line'>650</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>651</span>      * Return true if the action has finished.
<span class='line'>652</span>      * @return {Boolean}
<span class='line'>653</span>      */</span><span class="WHIT">
<span class='line'>654</span> </span><span class="WHIT">    </span><span class="NAME">isDone</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>655</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._total</span><span class="WHIT"> </span><span class="PUNC">==</span><span class="WHIT"> </span><span class="NAME">this._times</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>656</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>657</span> 
<span class='line'>658</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>659</span>      * returns a reversed action.
<span class='line'>660</span>      * @return {cc.Repeat}
<span class='line'>661</span>      */</span><span class="WHIT">
<span class='line'>662</span> </span><span class="WHIT">    </span><span class="NAME">reverse</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>663</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.Repeat</span><span class="PUNC">(</span><span class="NAME">this._innerAction.reverse</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._times</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>664</span> </span><span class="WHIT">        </span><span class="NAME">this._cloneDecoration</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>665</span> </span><span class="WHIT">        </span><span class="NAME">this._reverseEaseList</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>666</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>667</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>668</span> 
<span class='line'>669</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>670</span>      * Set inner Action.
<span class='line'>671</span>      * @param {cc.FiniteTimeAction} action
<span class='line'>672</span>      */</span><span class="WHIT">
<span class='line'>673</span> </span><span class="WHIT">    </span><span class="NAME">setInnerAction</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>674</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this._innerAction</span><span class="WHIT"> </span><span class="PUNC">!=</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>675</span> </span><span class="WHIT">            </span><span class="NAME">this._innerAction</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>676</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>677</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>678</span> 
<span class='line'>679</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>680</span>      * Get inner Action.
<span class='line'>681</span>      * @return {cc.FiniteTimeAction}
<span class='line'>682</span>      */</span><span class="WHIT">
<span class='line'>683</span> </span><span class="WHIT">    </span><span class="NAME">getInnerAction</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>684</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._innerAction</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>685</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>686</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>687</span> 
<span class='line'>688</span> </span><span class="COMM">/**
<span class='line'>689</span>  * Creates a Repeat action. Times is an unsigned integer between 1 and pow(2,30)
<span class='line'>690</span>  * @function
<span class='line'>691</span>  * @param {cc.FiniteTimeAction} action
<span class='line'>692</span>  * @param {Number} times
<span class='line'>693</span>  * @return {cc.Repeat}
<span class='line'>694</span>  * @example
<span class='line'>695</span>  * // example
<span class='line'>696</span>  * var rep = cc.repeat(cc.sequence(jump2, jump1), 5);
<span class='line'>697</span>  */</span><span class="WHIT">
<span class='line'>698</span> </span><span class="NAME">cc.repeat</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">times</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>699</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.Repeat</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">times</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>700</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>701</span> 
<span class='line'>702</span> </span><span class="COMM">/**
<span class='line'>703</span>  * Please use cc.repeat instead
<span class='line'>704</span>  * Creates a Repeat action. Times is an unsigned integer between 1 and pow(2,30)
<span class='line'>705</span>  * @static
<span class='line'>706</span>  * @deprecated since v3.0 &lt;br /> Please use cc.repeat instead.
<span class='line'>707</span>  * @param {cc.FiniteTimeAction} action
<span class='line'>708</span>  * @param {Number} times
<span class='line'>709</span>  * @return {cc.Repeat}
<span class='line'>710</span>  */</span><span class="WHIT">
<span class='line'>711</span> </span><span class="NAME">cc.Repeat.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.repeat</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>712</span> 
<span class='line'>713</span> 
<span class='line'>714</span> </span><span class="COMM">/**  Repeats an action for ever.  &lt;br/>
<span class='line'>715</span>  * To repeat the an action for a limited number of times use the Repeat action. &lt;br/>
<span class='line'>716</span>  * @warning This action can't be Sequenceable because it is not an IntervalAction
<span class='line'>717</span>  * @class
<span class='line'>718</span>  * @extends cc.ActionInterval
<span class='line'>719</span>  * @param {cc.FiniteTimeAction} action
<span class='line'>720</span>  * @example
<span class='line'>721</span>  * var rep = new cc.RepeatForever(cc.sequence(jump2, jump1), 5);
<span class='line'>722</span>  */</span><span class="WHIT">
<span class='line'>723</span> </span><span class="NAME">cc.RepeatForever</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.ActionInterval.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.RepeatForever# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>724</span> </span><span class="WHIT">    </span><span class="NAME">_innerAction</span><span class="PUNC">:</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="COMM">//CCActionInterval</span><span class="WHIT">
<span class='line'>725</span> 
<span class='line'>726</span> </span><span class="WHIT">	</span><span class="COMM">/**
<span class='line'>727</span>      * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. &lt;br />
<span class='line'>728</span> 	 * Create a acton which repeat forever.
<span class='line'>729</span> 	 * @param {cc.FiniteTimeAction} action
<span class='line'>730</span> 	 */</span><span class="WHIT">
<span class='line'>731</span> </span><span class="WHIT">    </span><span class="NAME">ctor</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>732</span> </span><span class="WHIT">        </span><span class="NAME">cc.ActionInterval.prototype.ctor.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>733</span> </span><span class="WHIT">        </span><span class="NAME">this._innerAction</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>734</span> 
<span class='line'>735</span> </span><span class="WHIT">		</span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">this.initWithAction</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>736</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>737</span> 
<span class='line'>738</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>739</span>      * @param {cc.ActionInterval} action
<span class='line'>740</span>      * @return {Boolean}
<span class='line'>741</span>      */</span><span class="WHIT">
<span class='line'>742</span> </span><span class="WHIT">    </span><span class="NAME">initWithAction</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>743</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="PUNC">!</span><span class="NAME">action</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>744</span> </span><span class="WHIT">            </span><span class="KEYW">throw</span><span class="WHIT"> </span><span class="STRN">"cc.RepeatForever.initWithAction(): action must be non null"</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>745</span> 
<span class='line'>746</span> </span><span class="WHIT">        </span><span class="NAME">this._innerAction</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>747</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>748</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>749</span> 
<span class='line'>750</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>751</span>      * returns a new clone of the action
<span class='line'>752</span>      * @returns {cc.RepeatForever}
<span class='line'>753</span>      */</span><span class="WHIT">
<span class='line'>754</span> </span><span class="WHIT">    </span><span class="NAME">clone</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>755</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.RepeatForever</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>756</span> </span><span class="WHIT">        </span><span class="NAME">this._cloneDecoration</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>757</span> </span><span class="WHIT">        </span><span class="NAME">action.initWithAction</span><span class="PUNC">(</span><span class="NAME">this._innerAction.clone</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>758</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>759</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>760</span> 
<span class='line'>761</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>762</span>      * Start the action with target.
<span class='line'>763</span>      * @param {cc.Node} target
<span class='line'>764</span>      */</span><span class="WHIT">
<span class='line'>765</span> </span><span class="WHIT">    </span><span class="NAME">startWithTarget</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">target</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>766</span> </span><span class="WHIT">        </span><span class="NAME">cc.ActionInterval.prototype.startWithTarget.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">target</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>767</span> </span><span class="WHIT">        </span><span class="NAME">this._innerAction.startWithTarget</span><span class="PUNC">(</span><span class="NAME">target</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>768</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>769</span> 
<span class='line'>770</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>771</span>      * called every frame with it's delta time. &lt;br />
<span class='line'>772</span>      * DON'T override unless you know what you are doing.
<span class='line'>773</span>      * @param dt delta time in seconds
<span class='line'>774</span>      */</span><span class="WHIT">
<span class='line'>775</span> </span><span class="WHIT">    </span><span class="NAME">step</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>776</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locInnerAction</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._innerAction</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>777</span> </span><span class="WHIT">        </span><span class="NAME">locInnerAction.step</span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>778</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">locInnerAction.isDone</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>779</span> </span><span class="WHIT">            </span><span class="COMM">//var diff = locInnerAction.getElapsed() - locInnerAction._duration;</span><span class="WHIT">
<span class='line'>780</span> </span><span class="WHIT">            </span><span class="NAME">locInnerAction.startWithTarget</span><span class="PUNC">(</span><span class="NAME">this.target</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>781</span> </span><span class="WHIT">            </span><span class="COMM">// to prevent jerk. issue #390 ,1247</span><span class="WHIT">
<span class='line'>782</span> </span><span class="WHIT">            </span><span class="COMM">//this._innerAction.step(0);</span><span class="WHIT">
<span class='line'>783</span> </span><span class="WHIT">            </span><span class="COMM">//this._innerAction.step(diff);</span><span class="WHIT">
<span class='line'>784</span> </span><span class="WHIT">            </span><span class="NAME">locInnerAction.step</span><span class="PUNC">(</span><span class="NAME">locInnerAction.getElapsed</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">locInnerAction._duration</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>785</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>786</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>787</span> 
<span class='line'>788</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>789</span>      * Return true if the action has finished.
<span class='line'>790</span>      * @return {Boolean}
<span class='line'>791</span>      */</span><span class="WHIT">
<span class='line'>792</span> </span><span class="WHIT">    </span><span class="NAME">isDone</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>793</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>794</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>795</span> 
<span class='line'>796</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>797</span>      * Returns a reversed action.
<span class='line'>798</span>      * @return {cc.RepeatForever}
<span class='line'>799</span>      */</span><span class="WHIT">
<span class='line'>800</span> </span><span class="WHIT">    </span><span class="NAME">reverse</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>801</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.RepeatForever</span><span class="PUNC">(</span><span class="NAME">this._innerAction.reverse</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>802</span> </span><span class="WHIT">        </span><span class="NAME">this._cloneDecoration</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>803</span> </span><span class="WHIT">        </span><span class="NAME">this._reverseEaseList</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>804</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>805</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>806</span> 
<span class='line'>807</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>808</span>      * Set inner action.
<span class='line'>809</span>      * @param {cc.ActionInterval} action
<span class='line'>810</span>      */</span><span class="WHIT">
<span class='line'>811</span> </span><span class="WHIT">    </span><span class="NAME">setInnerAction</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>812</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this._innerAction</span><span class="WHIT"> </span><span class="PUNC">!=</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>813</span> </span><span class="WHIT">            </span><span class="NAME">this._innerAction</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>814</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>815</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>816</span> 
<span class='line'>817</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>818</span>      * Get inner action.
<span class='line'>819</span>      * @return {cc.ActionInterval}
<span class='line'>820</span>      */</span><span class="WHIT">
<span class='line'>821</span> </span><span class="WHIT">    </span><span class="NAME">getInnerAction</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>822</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._innerAction</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>823</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>824</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>825</span> 
<span class='line'>826</span> </span><span class="COMM">/**
<span class='line'>827</span>  * Create a acton which repeat forever
<span class='line'>828</span>  * @function
<span class='line'>829</span>  * @param {cc.FiniteTimeAction} action
<span class='line'>830</span>  * @return {cc.RepeatForever}
<span class='line'>831</span>  * @example
<span class='line'>832</span>  * // example
<span class='line'>833</span>  * var repeat = cc.repeatForever(cc.rotateBy(1.0, 360));
<span class='line'>834</span>  */</span><span class="WHIT">
<span class='line'>835</span> </span><span class="NAME">cc.repeatForever</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>836</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.RepeatForever</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>837</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>838</span> 
<span class='line'>839</span> </span><span class="COMM">/**
<span class='line'>840</span>  * Please use cc.repeatForever instead
<span class='line'>841</span>  * Create a acton which repeat forever
<span class='line'>842</span>  * @static
<span class='line'>843</span>  * @deprecated since v3.0 &lt;br /> Please use cc.repeatForever instead.
<span class='line'>844</span>  * @param {cc.FiniteTimeAction} action
<span class='line'>845</span>  * @return {cc.RepeatForever}
<span class='line'>846</span>  * @param {Array|cc.FiniteTimeAction} tempArray
<span class='line'>847</span>  * @example
<span class='line'>848</span>  * var action = new cc.Spawn(cc.jumpBy(2, cc.p(300, 0), 50, 4), cc.rotateBy(2, 720));
<span class='line'>849</span>  */</span><span class="WHIT">
<span class='line'>850</span> </span><span class="NAME">cc.RepeatForever.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.repeatForever</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>851</span> 
<span class='line'>852</span> 
<span class='line'>853</span> </span><span class="COMM">/** Spawn a new action immediately
<span class='line'>854</span>  * @class
<span class='line'>855</span>  * @extends cc.ActionInterval
<span class='line'>856</span>  */</span><span class="WHIT">
<span class='line'>857</span> </span><span class="NAME">cc.Spawn</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.ActionInterval.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.Spawn# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>858</span> </span><span class="WHIT">    </span><span class="NAME">_one</span><span class="PUNC">:</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>859</span> </span><span class="WHIT">    </span><span class="NAME">_two</span><span class="PUNC">:</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>860</span> 
<span class='line'>861</span> </span><span class="WHIT">	</span><span class="COMM">/**
<span class='line'>862</span>      * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
<span class='line'>863</span> 	 * @param {Array|cc.FiniteTimeAction} tempArray
<span class='line'>864</span> 	 */</span><span class="WHIT">
<span class='line'>865</span> </span><span class="WHIT">    </span><span class="NAME">ctor</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">tempArray</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>866</span> </span><span class="WHIT">        </span><span class="NAME">cc.ActionInterval.prototype.ctor.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>867</span> </span><span class="WHIT">        </span><span class="NAME">this._one</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>868</span> </span><span class="WHIT">        </span><span class="NAME">this._two</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>869</span> 
<span class='line'>870</span> </span><span class="WHIT">		</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">paramArray</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">tempArray</span><span class="WHIT"> </span><span class="KEYW">instanceof</span><span class="WHIT"> </span><span class="NAME">Array</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">?</span><span class="WHIT"> </span><span class="NAME">tempArray</span><span class="WHIT"> </span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NAME">arguments</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>871</span> </span><span class="WHIT">		</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">last</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">paramArray.length</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>872</span> </span><span class="WHIT">		</span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">(</span><span class="NAME">last</span><span class="WHIT"> </span><span class="PUNC">>=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">paramArray</span><span class="PUNC">[</span><span class="NAME">last</span><span class="PUNC">]</span><span class="WHIT"> </span><span class="PUNC">==</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>873</span> </span><span class="WHIT">			</span><span class="NAME">cc.log</span><span class="PUNC">(</span><span class="STRN">"parameters should not be ending with null in Javascript"</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>874</span> 
<span class='line'>875</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">last</span><span class="WHIT"> </span><span class="PUNC">>=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>876</span> </span><span class="WHIT">            </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">prev</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">paramArray</span><span class="PUNC">[</span><span class="NUMB">0</span><span class="PUNC">]</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">action1</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>877</span> </span><span class="WHIT">            </span><span class="KEYW">for</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="NAME">last</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="PUNC">++</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>878</span> </span><span class="WHIT">                </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">paramArray</span><span class="PUNC">[</span><span class="NAME">i</span><span class="PUNC">]</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>879</span> </span><span class="WHIT">                    </span><span class="NAME">action1</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">prev</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>880</span> </span><span class="WHIT">                    </span><span class="NAME">prev</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Spawn._actionOneTwo</span><span class="PUNC">(</span><span class="NAME">action1</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">paramArray</span><span class="PUNC">[</span><span class="NAME">i</span><span class="PUNC">]</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>881</span> </span><span class="WHIT">                </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>882</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>883</span> </span><span class="WHIT">            </span><span class="NAME">this.initWithTwoActions</span><span class="PUNC">(</span><span class="NAME">prev</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">paramArray</span><span class="PUNC">[</span><span class="NAME">last</span><span class="PUNC">]</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>884</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>885</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>886</span> 
<span class='line'>887</span> </span><span class="WHIT">    </span><span class="COMM">/** initializes the Spawn action with the 2 actions to spawn
<span class='line'>888</span>      * @param {cc.FiniteTimeAction} action1
<span class='line'>889</span>      * @param {cc.FiniteTimeAction} action2
<span class='line'>890</span>      * @return {Boolean}
<span class='line'>891</span>      */</span><span class="WHIT">
<span class='line'>892</span> </span><span class="WHIT">    </span><span class="NAME">initWithTwoActions</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">action1</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">action2</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>893</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="PUNC">!</span><span class="NAME">action1</span><span class="WHIT"> </span><span class="PUNC">||</span><span class="WHIT"> </span><span class="PUNC">!</span><span class="NAME">action2</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>894</span> </span><span class="WHIT">            </span><span class="KEYW">throw</span><span class="WHIT"> </span><span class="STRN">"cc.Spawn.initWithTwoActions(): arguments must all be non null"</span><span class="WHIT"> </span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>895</span> 
<span class='line'>896</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">ret</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>897</span> 
<span class='line'>898</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">d1</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">action1._duration</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>899</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">d2</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">action2._duration</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>900</span> 
<span class='line'>901</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this.initWithDuration</span><span class="PUNC">(</span><span class="NAME">Math.max</span><span class="PUNC">(</span><span class="NAME">d1</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">d2</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>902</span> </span><span class="WHIT">            </span><span class="NAME">this._one</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">action1</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>903</span> </span><span class="WHIT">            </span><span class="NAME">this._two</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">action2</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>904</span> 
<span class='line'>905</span> </span><span class="WHIT">            </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">d1</span><span class="WHIT"> </span><span class="PUNC">></span><span class="WHIT"> </span><span class="NAME">d2</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>906</span> </span><span class="WHIT">                </span><span class="NAME">this._two</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Sequence._actionOneTwo</span><span class="PUNC">(</span><span class="NAME">action2</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.delayTime</span><span class="PUNC">(</span><span class="NAME">d1</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">d2</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>907</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT"> </span><span class="KEYW">else</span><span class="WHIT"> </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">d1</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="NAME">d2</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>908</span> </span><span class="WHIT">                </span><span class="NAME">this._one</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Sequence._actionOneTwo</span><span class="PUNC">(</span><span class="NAME">action1</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.delayTime</span><span class="PUNC">(</span><span class="NAME">d2</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">d1</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>909</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>910</span> 
<span class='line'>911</span> </span><span class="WHIT">            </span><span class="NAME">ret</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>912</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>913</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">ret</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>914</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>915</span> 
<span class='line'>916</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>917</span>      * returns a new clone of the action
<span class='line'>918</span>      * @returns {cc.Spawn}
<span class='line'>919</span>      */</span><span class="WHIT">
<span class='line'>920</span> </span><span class="WHIT">    </span><span class="NAME">clone</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>921</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.Spawn</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>922</span> </span><span class="WHIT">        </span><span class="NAME">this._cloneDecoration</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>923</span> </span><span class="WHIT">        </span><span class="NAME">action.initWithTwoActions</span><span class="PUNC">(</span><span class="NAME">this._one.clone</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._two.clone</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>924</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>925</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>926</span> 
<span class='line'>927</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>928</span>      * Start the action with target.
<span class='line'>929</span>      * @param {cc.Node} target
<span class='line'>930</span>      */</span><span class="WHIT">
<span class='line'>931</span> </span><span class="WHIT">    </span><span class="NAME">startWithTarget</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">target</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>932</span> </span><span class="WHIT">        </span><span class="NAME">cc.ActionInterval.prototype.startWithTarget.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">target</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>933</span> </span><span class="WHIT">        </span><span class="NAME">this._one.startWithTarget</span><span class="PUNC">(</span><span class="NAME">target</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>934</span> </span><span class="WHIT">        </span><span class="NAME">this._two.startWithTarget</span><span class="PUNC">(</span><span class="NAME">target</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>935</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>936</span> 
<span class='line'>937</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>938</span>      * Stop the action
<span class='line'>939</span>      */</span><span class="WHIT">
<span class='line'>940</span> </span><span class="WHIT">    </span><span class="NAME">stop</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>941</span> </span><span class="WHIT">        </span><span class="NAME">this._one.stop</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>942</span> </span><span class="WHIT">        </span><span class="NAME">this._two.stop</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>943</span> </span><span class="WHIT">        </span><span class="NAME">cc.Action.prototype.stop.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>944</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>945</span> 
<span class='line'>946</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>947</span>      * Called once per frame. Time is the number of seconds of a frame interval.
<span class='line'>948</span>      * @param {Number}  dt
<span class='line'>949</span>      */</span><span class="WHIT">
<span class='line'>950</span> </span><span class="WHIT">    </span><span class="NAME">update</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>951</span> </span><span class="WHIT">        </span><span class="NAME">dt</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._computeEaseTime</span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>952</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this._one</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>953</span> </span><span class="WHIT">            </span><span class="NAME">this._one.update</span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>954</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this._two</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>955</span> </span><span class="WHIT">            </span><span class="NAME">this._two.update</span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>956</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>957</span> 
<span class='line'>958</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>959</span>      * Returns a reversed action.
<span class='line'>960</span>      * @return {cc.Spawn}
<span class='line'>961</span>      */</span><span class="WHIT">
<span class='line'>962</span> </span><span class="WHIT">    </span><span class="NAME">reverse</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>963</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Spawn._actionOneTwo</span><span class="PUNC">(</span><span class="NAME">this._one.reverse</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._two.reverse</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>964</span> </span><span class="WHIT">        </span><span class="NAME">this._cloneDecoration</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>965</span> </span><span class="WHIT">        </span><span class="NAME">this._reverseEaseList</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>966</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>967</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>968</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>969</span> 
<span class='line'>970</span> </span><span class="COMM">/**
<span class='line'>971</span>  * Create a spawn action which runs several actions in parallel.
<span class='line'>972</span>  * @function
<span class='line'>973</span>  * @param {Array|cc.FiniteTimeAction}tempArray
<span class='line'>974</span>  * @return {cc.FiniteTimeAction}
<span class='line'>975</span>  * @example
<span class='line'>976</span>  * // example
<span class='line'>977</span>  * var action = cc.spawn(cc.jumpBy(2, cc.p(300, 0), 50, 4), cc.rotateBy(2, 720));
<span class='line'>978</span>  */</span><span class="WHIT">
<span class='line'>979</span> </span><span class="NAME">cc.spawn</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="COMM">/*Multiple Arguments*/</span><span class="NAME">tempArray</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>980</span> </span><span class="WHIT">    </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">paramArray</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">tempArray</span><span class="WHIT"> </span><span class="KEYW">instanceof</span><span class="WHIT"> </span><span class="NAME">Array</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">?</span><span class="WHIT"> </span><span class="NAME">tempArray</span><span class="WHIT"> </span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NAME">arguments</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>981</span> </span><span class="WHIT">    </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">(</span><span class="NAME">paramArray.length</span><span class="WHIT"> </span><span class="PUNC">></span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">paramArray</span><span class="PUNC">[</span><span class="NAME">paramArray.length</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">]</span><span class="WHIT"> </span><span class="PUNC">==</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>982</span> </span><span class="WHIT">        </span><span class="NAME">cc.log</span><span class="PUNC">(</span><span class="STRN">"parameters should not be ending with null in Javascript"</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>983</span> 
<span class='line'>984</span> </span><span class="WHIT">    </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">prev</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">paramArray</span><span class="PUNC">[</span><span class="NUMB">0</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>985</span> </span><span class="WHIT">    </span><span class="KEYW">for</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="NAME">paramArray.length</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="PUNC">++</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>986</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">paramArray</span><span class="PUNC">[</span><span class="NAME">i</span><span class="PUNC">]</span><span class="WHIT"> </span><span class="PUNC">!=</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>987</span> </span><span class="WHIT">            </span><span class="NAME">prev</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Spawn._actionOneTwo</span><span class="PUNC">(</span><span class="NAME">prev</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">paramArray</span><span class="PUNC">[</span><span class="NAME">i</span><span class="PUNC">]</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>988</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>989</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">prev</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>990</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>991</span> 
<span class='line'>992</span> </span><span class="COMM">/**
<span class='line'>993</span>  * Please use cc.spawn instead.
<span class='line'>994</span>  * Create a spawn action which runs several actions in parallel.
<span class='line'>995</span>  * @static
<span class='line'>996</span>  * @deprecated since v3.0 &lt;br /> Please use cc.spawn instead.
<span class='line'>997</span>  * @param {Array|cc.FiniteTimeAction}tempArray
<span class='line'>998</span>  * @return {cc.FiniteTimeAction}
<span class='line'>999</span>  */</span><span class="WHIT">
<span class='line'>1000</span> </span><span class="NAME">cc.Spawn.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.spawn</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1001</span> 
<span class='line'>1002</span> </span><span class="COMM">/**
<span class='line'>1003</span>  * @param {cc.FiniteTimeAction} action1
<span class='line'>1004</span>  * @param {cc.FiniteTimeAction} action2
<span class='line'>1005</span>  * @return {cc.Spawn}
<span class='line'>1006</span>  * @private
<span class='line'>1007</span>  */</span><span class="WHIT">
<span class='line'>1008</span> </span><span class="NAME">cc.Spawn._actionOneTwo</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">action1</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">action2</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1009</span> </span><span class="WHIT">    </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">pSpawn</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.Spawn</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1010</span> </span><span class="WHIT">    </span><span class="NAME">pSpawn.initWithTwoActions</span><span class="PUNC">(</span><span class="NAME">action1</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">action2</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1011</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">pSpawn</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1012</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1013</span> 
<span class='line'>1014</span> 
<span class='line'>1015</span> </span><span class="COMM">/**
<span class='line'>1016</span>  * Rotates a cc.Node object to a certain angle by modifying it's.
<span class='line'>1017</span>  * rotation attribute. &lt;br/>
<span class='line'>1018</span>  * The direction will be decided by the shortest angle.
<span class='line'>1019</span>  * @class
<span class='line'>1020</span>  * @extends cc.ActionInterval
<span class='line'>1021</span>  * @param {Number} duration duration in seconds
<span class='line'>1022</span>  * @param {Number} deltaAngleX deltaAngleX in degrees.
<span class='line'>1023</span>  * @param {Number} [deltaAngleY] deltaAngleY in degrees.
<span class='line'>1024</span>  * @example
<span class='line'>1025</span>  * var rotateTo = new cc.RotateTo(2, 61.0);
<span class='line'>1026</span>  */</span><span class="WHIT">
<span class='line'>1027</span> </span><span class="NAME">cc.RotateTo</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.ActionInterval.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.RotateTo# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1028</span> </span><span class="WHIT">    </span><span class="NAME">_dstAngleX</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1029</span> </span><span class="WHIT">    </span><span class="NAME">_startAngleX</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1030</span> </span><span class="WHIT">    </span><span class="NAME">_diffAngleX</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1031</span> 
<span class='line'>1032</span> </span><span class="WHIT">    </span><span class="NAME">_dstAngleY</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1033</span> </span><span class="WHIT">    </span><span class="NAME">_startAngleY</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1034</span> </span><span class="WHIT">    </span><span class="NAME">_diffAngleY</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1035</span> 
<span class='line'>1036</span> </span><span class="WHIT">	</span><span class="COMM">/**
<span class='line'>1037</span>      * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. &lt;br />
<span class='line'>1038</span> 	 * Creates a RotateTo action with x and y rotation angles.
<span class='line'>1039</span> 	 * @param {Number} duration duration in seconds
<span class='line'>1040</span> 	 * @param {Number} deltaAngleX deltaAngleX in degrees.
<span class='line'>1041</span> 	 * @param {Number} [deltaAngleY] deltaAngleY in degrees.
<span class='line'>1042</span> 	 */</span><span class="WHIT">
<span class='line'>1043</span> </span><span class="WHIT">    </span><span class="NAME">ctor</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">deltaAngleX</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">deltaAngleY</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1044</span> </span><span class="WHIT">        </span><span class="NAME">cc.ActionInterval.prototype.ctor.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1045</span> 
<span class='line'>1046</span> </span><span class="WHIT">		</span><span class="NAME">deltaAngleX</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="NAME">undefined</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">this.initWithDuration</span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">deltaAngleX</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">deltaAngleY</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1047</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1048</span> 
<span class='line'>1049</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1050</span>      * Initializes the action.
<span class='line'>1051</span>      * @param {Number} duration
<span class='line'>1052</span>      * @param {Number} deltaAngleX
<span class='line'>1053</span>      * @param {Number} deltaAngleY
<span class='line'>1054</span>      * @return {Boolean}
<span class='line'>1055</span>      */</span><span class="WHIT">
<span class='line'>1056</span> </span><span class="WHIT">    </span><span class="NAME">initWithDuration</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">deltaAngleX</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">deltaAngleY</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1057</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">cc.ActionInterval.prototype.initWithDuration.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">duration</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1058</span> </span><span class="WHIT">            </span><span class="NAME">this._dstAngleX</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">deltaAngleX</span><span class="WHIT"> </span><span class="PUNC">||</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1059</span> </span><span class="WHIT">            </span><span class="NAME">this._dstAngleY</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">deltaAngleY</span><span class="WHIT"> </span><span class="PUNC">||</span><span class="WHIT"> </span><span class="NAME">this._dstAngleX</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1060</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1061</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1062</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1063</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1064</span> 
<span class='line'>1065</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1066</span>      * returns a new clone of the action
<span class='line'>1067</span>      * @returns {cc.RotateTo}
<span class='line'>1068</span>      */</span><span class="WHIT">
<span class='line'>1069</span> </span><span class="WHIT">    </span><span class="NAME">clone</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1070</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.RotateTo</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1071</span> </span><span class="WHIT">        </span><span class="NAME">this._cloneDecoration</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1072</span> </span><span class="WHIT">        </span><span class="NAME">action.initWithDuration</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._dstAngleX</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._dstAngleY</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1073</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1074</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1075</span> 
<span class='line'>1076</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1077</span>      * Start the action with target.
<span class='line'>1078</span>      * @param {cc.Node} target
<span class='line'>1079</span>      */</span><span class="WHIT">
<span class='line'>1080</span> </span><span class="WHIT">    </span><span class="NAME">startWithTarget</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">target</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1081</span> </span><span class="WHIT">        </span><span class="NAME">cc.ActionInterval.prototype.startWithTarget.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">target</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1082</span> 
<span class='line'>1083</span> </span><span class="WHIT">        </span><span class="COMM">// Calculate X</span><span class="WHIT">
<span class='line'>1084</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locStartAngleX</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">target.rotationX</span><span class="WHIT"> </span><span class="PUNC">%</span><span class="WHIT"> </span><span class="NUMB">360.0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1085</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locDiffAngleX</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._dstAngleX</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">locStartAngleX</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1086</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">locDiffAngleX</span><span class="WHIT"> </span><span class="PUNC">></span><span class="WHIT"> </span><span class="NUMB">180</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>1087</span> </span><span class="WHIT">            </span><span class="NAME">locDiffAngleX</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">360</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1088</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">locDiffAngleX</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="NUMB">180</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>1089</span> </span><span class="WHIT">            </span><span class="NAME">locDiffAngleX</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">360</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1090</span> </span><span class="WHIT">        </span><span class="NAME">this._startAngleX</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">locStartAngleX</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1091</span> </span><span class="WHIT">        </span><span class="NAME">this._diffAngleX</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">locDiffAngleX</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1092</span> 
<span class='line'>1093</span> </span><span class="WHIT">        </span><span class="COMM">// Calculate Y  It's duplicated from calculating X since the rotation wrap should be the same</span><span class="WHIT">
<span class='line'>1094</span> </span><span class="WHIT">        </span><span class="NAME">this._startAngleY</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">target.rotationY</span><span class="WHIT"> </span><span class="PUNC">%</span><span class="WHIT"> </span><span class="NUMB">360.0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1095</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locDiffAngleY</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._dstAngleY</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">this._startAngleY</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1096</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">locDiffAngleY</span><span class="WHIT"> </span><span class="PUNC">></span><span class="WHIT"> </span><span class="NUMB">180</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>1097</span> </span><span class="WHIT">            </span><span class="NAME">locDiffAngleY</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">360</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1098</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">locDiffAngleY</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="NUMB">180</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>1099</span> </span><span class="WHIT">            </span><span class="NAME">locDiffAngleY</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">360</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1100</span> </span><span class="WHIT">        </span><span class="NAME">this._diffAngleY</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">locDiffAngleY</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1101</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1102</span> 
<span class='line'>1103</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1104</span>      * RotateTo reverse not implemented.
<span class='line'>1105</span>      * Will be overridden.
<span class='line'>1106</span>      */</span><span class="WHIT">
<span class='line'>1107</span> </span><span class="WHIT">    </span><span class="NAME">reverse</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1108</span> </span><span class="WHIT">        </span><span class="NAME">cc.log</span><span class="PUNC">(</span><span class="STRN">"cc.RotateTo.reverse(): it should be overridden in subclass."</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1109</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1110</span> 
<span class='line'>1111</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1112</span>      * Called once per frame. Time is the number of seconds of a frame interval.
<span class='line'>1113</span>      * @param {Number}  dt
<span class='line'>1114</span>      */</span><span class="WHIT">
<span class='line'>1115</span> </span><span class="WHIT">    </span><span class="NAME">update</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1116</span> </span><span class="WHIT">        </span><span class="NAME">dt</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._computeEaseTime</span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1117</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this.target</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1118</span> </span><span class="WHIT">            </span><span class="NAME">this.target.rotationX</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._startAngleX</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NAME">this._diffAngleX</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">dt</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1119</span> </span><span class="WHIT">            </span><span class="NAME">this.target.rotationY</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._startAngleY</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NAME">this._diffAngleY</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">dt</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1120</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1121</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1122</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1123</span> 
<span class='line'>1124</span> </span><span class="COMM">/**
<span class='line'>1125</span>  * Creates a RotateTo action with separate rotation angles.
<span class='line'>1126</span>  * To specify the angle of rotation.
<span class='line'>1127</span>  * @function
<span class='line'>1128</span>  * @param {Number} duration duration in seconds
<span class='line'>1129</span>  * @param {Number} deltaAngleX deltaAngleX in degrees.
<span class='line'>1130</span>  * @param {Number} [deltaAngleY] deltaAngleY in degrees.
<span class='line'>1131</span>  * @return {cc.RotateTo}
<span class='line'>1132</span>  * @example
<span class='line'>1133</span>  * // example
<span class='line'>1134</span>  * var rotateTo = cc.rotateTo(2, 61.0);
<span class='line'>1135</span>  */</span><span class="WHIT">
<span class='line'>1136</span> </span><span class="NAME">cc.rotateTo</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">deltaAngleX</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">deltaAngleY</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1137</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.RotateTo</span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">deltaAngleX</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">deltaAngleY</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1138</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1139</span> 
<span class='line'>1140</span> </span><span class="COMM">/**
<span class='line'>1141</span>  * Please use cc.rotateTo instead
<span class='line'>1142</span>  * Creates a RotateTo action with separate rotation angles.
<span class='line'>1143</span>  * To specify the angle of rotation.
<span class='line'>1144</span>  * @static
<span class='line'>1145</span>  * @deprecated since v3.0 &lt;br /> Please use cc.rotateTo instead.
<span class='line'>1146</span>  * @param {Number} duration duration in seconds
<span class='line'>1147</span>  * @param {Number} deltaAngleX deltaAngleX in degrees.
<span class='line'>1148</span>  * @param {Number} [deltaAngleY] deltaAngleY in degrees.
<span class='line'>1149</span>  * @return {cc.RotateTo}
<span class='line'>1150</span>  */</span><span class="WHIT">
<span class='line'>1151</span> </span><span class="NAME">cc.RotateTo.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.rotateTo</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1152</span> 
<span class='line'>1153</span> 
<span class='line'>1154</span> </span><span class="COMM">/**
<span class='line'>1155</span>  * Rotates a cc.Node object clockwise a number of degrees by modifying it's rotation attribute.
<span class='line'>1156</span>  * Relative to its properties to modify.
<span class='line'>1157</span>  * @class
<span class='line'>1158</span>  * @extends  cc.ActionInterval
<span class='line'>1159</span>  * @param {Number} duration duration in seconds
<span class='line'>1160</span>  * @param {Number} deltaAngleX deltaAngleX in degrees
<span class='line'>1161</span>  * @param {Number} [deltaAngleY] deltaAngleY in degrees
<span class='line'>1162</span>  * @example
<span class='line'>1163</span>  * var actionBy = new cc.RotateBy(2, 360);
<span class='line'>1164</span>  */</span><span class="WHIT">
<span class='line'>1165</span> </span><span class="NAME">cc.RotateBy</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.ActionInterval.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.RotateBy# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1166</span> </span><span class="WHIT">    </span><span class="NAME">_angleX</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1167</span> </span><span class="WHIT">    </span><span class="NAME">_startAngleX</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1168</span> </span><span class="WHIT">    </span><span class="NAME">_angleY</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1169</span> </span><span class="WHIT">    </span><span class="NAME">_startAngleY</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1170</span> 
<span class='line'>1171</span> </span><span class="WHIT">	</span><span class="COMM">/**
<span class='line'>1172</span>      * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
<span class='line'>1173</span> 	 * @param {Number} duration duration in seconds
<span class='line'>1174</span> 	 * @param {Number} deltaAngleX deltaAngleX in degrees
<span class='line'>1175</span> 	 * @param {Number} [deltaAngleY] deltaAngleY in degrees
<span class='line'>1176</span> 	 */</span><span class="WHIT">
<span class='line'>1177</span> </span><span class="WHIT">    </span><span class="NAME">ctor</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">deltaAngleX</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">deltaAngleY</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1178</span> </span><span class="WHIT">        </span><span class="NAME">cc.ActionInterval.prototype.ctor.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1179</span> 
<span class='line'>1180</span> </span><span class="WHIT">		</span><span class="NAME">deltaAngleX</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="NAME">undefined</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">this.initWithDuration</span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">deltaAngleX</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">deltaAngleY</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1181</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1182</span> 
<span class='line'>1183</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1184</span>      * Initializes the action.
<span class='line'>1185</span>      * @param {Number} duration duration in seconds
<span class='line'>1186</span>      * @param {Number} deltaAngleX deltaAngleX in degrees
<span class='line'>1187</span>      * @param {Number} [deltaAngleY=] deltaAngleY in degrees
<span class='line'>1188</span>      * @return {Boolean}
<span class='line'>1189</span>      */</span><span class="WHIT">
<span class='line'>1190</span> </span><span class="WHIT">    </span><span class="NAME">initWithDuration</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">deltaAngleX</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">deltaAngleY</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1191</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">cc.ActionInterval.prototype.initWithDuration.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">duration</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1192</span> </span><span class="WHIT">            </span><span class="NAME">this._angleX</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">deltaAngleX</span><span class="WHIT"> </span><span class="PUNC">||</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1193</span> </span><span class="WHIT">            </span><span class="NAME">this._angleY</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">deltaAngleY</span><span class="WHIT"> </span><span class="PUNC">||</span><span class="WHIT"> </span><span class="NAME">this._angleX</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1194</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1195</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1196</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1197</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1198</span> 
<span class='line'>1199</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1200</span>      * returns a new clone of the action
<span class='line'>1201</span>      * @returns {cc.RotateBy}
<span class='line'>1202</span>      */</span><span class="WHIT">
<span class='line'>1203</span> </span><span class="WHIT">    </span><span class="NAME">clone</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1204</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.RotateBy</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1205</span> </span><span class="WHIT">        </span><span class="NAME">this._cloneDecoration</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1206</span> </span><span class="WHIT">        </span><span class="NAME">action.initWithDuration</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._angleX</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._angleY</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1207</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1208</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1209</span> 
<span class='line'>1210</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1211</span>      * Start the action with target.
<span class='line'>1212</span>      * @param {cc.Node} target
<span class='line'>1213</span>      */</span><span class="WHIT">
<span class='line'>1214</span> </span><span class="WHIT">    </span><span class="NAME">startWithTarget</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">target</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1215</span> </span><span class="WHIT">        </span><span class="NAME">cc.ActionInterval.prototype.startWithTarget.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">target</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1216</span> </span><span class="WHIT">        </span><span class="NAME">this._startAngleX</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">target.rotationX</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1217</span> </span><span class="WHIT">        </span><span class="NAME">this._startAngleY</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">target.rotationY</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1218</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1219</span> 
<span class='line'>1220</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1221</span>      * Called once per frame. Time is the number of seconds of a frame interval.
<span class='line'>1222</span>      * @param {Number}  dt
<span class='line'>1223</span>      */</span><span class="WHIT">
<span class='line'>1224</span> </span><span class="WHIT">    </span><span class="NAME">update</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1225</span> </span><span class="WHIT">        </span><span class="NAME">dt</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._computeEaseTime</span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1226</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this.target</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1227</span> </span><span class="WHIT">            </span><span class="NAME">this.target.rotationX</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._startAngleX</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NAME">this._angleX</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">dt</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1228</span> </span><span class="WHIT">            </span><span class="NAME">this.target.rotationY</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._startAngleY</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NAME">this._angleY</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">dt</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1229</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1230</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1231</span> 
<span class='line'>1232</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1233</span>      * Returns a reversed action.
<span class='line'>1234</span>      * @return {cc.RotateBy}
<span class='line'>1235</span>      */</span><span class="WHIT">
<span class='line'>1236</span> </span><span class="WHIT">    </span><span class="NAME">reverse</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1237</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.RotateBy</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="NAME">this._angleX</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="NAME">this._angleY</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1238</span> </span><span class="WHIT">        </span><span class="NAME">this._cloneDecoration</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1239</span> </span><span class="WHIT">        </span><span class="NAME">this._reverseEaseList</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1240</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1241</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1242</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1243</span> 
<span class='line'>1244</span> </span><span class="COMM">/**
<span class='line'>1245</span>  * Rotates a cc.Node object clockwise a number of degrees by modifying it's rotation attribute.
<span class='line'>1246</span>  * Relative to its properties to modify.
<span class='line'>1247</span>  * @function
<span class='line'>1248</span>  * @param {Number} duration duration in seconds
<span class='line'>1249</span>  * @param {Number} deltaAngleX deltaAngleX in degrees
<span class='line'>1250</span>  * @param {Number} [deltaAngleY] deltaAngleY in degrees
<span class='line'>1251</span>  * @return {cc.RotateBy}
<span class='line'>1252</span>  * @example
<span class='line'>1253</span>  * // example
<span class='line'>1254</span>  * var actionBy = cc.rotateBy(2, 360);
<span class='line'>1255</span>  */</span><span class="WHIT">
<span class='line'>1256</span> </span><span class="NAME">cc.rotateBy</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">deltaAngleX</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">deltaAngleY</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1257</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.RotateBy</span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">deltaAngleX</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">deltaAngleY</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1258</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1259</span> </span><span class="COMM">/**
<span class='line'>1260</span>  * Please use cc.rotateBy instead.
<span class='line'>1261</span>  * Rotates a cc.Node object clockwise a number of degrees by modifying it's rotation attribute.
<span class='line'>1262</span>  * Relative to its properties to modify.
<span class='line'>1263</span>  * @static
<span class='line'>1264</span>  * @deprecated since v3.0 &lt;br /> Please use cc.rotateBy instead.
<span class='line'>1265</span>  * @param {Number} duration duration in seconds
<span class='line'>1266</span>  * @param {Number} deltaAngleX deltaAngleX in degrees
<span class='line'>1267</span>  * @param {Number} [deltaAngleY] deltaAngleY in degrees
<span class='line'>1268</span>  * @return {cc.RotateBy}
<span class='line'>1269</span>  */</span><span class="WHIT">
<span class='line'>1270</span> </span><span class="NAME">cc.RotateBy.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.rotateBy</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1271</span> 
<span class='line'>1272</span> 
<span class='line'>1273</span> </span><span class="COMM">/**
<span class='line'>1274</span>  * &lt;p>
<span class='line'>1275</span>  *     Moves a CCNode object x,y pixels by modifying it's position attribute.                                  &lt;br/>
<span class='line'>1276</span>  *     x and y are relative to the position of the object.                                                     &lt;br/>
<span class='line'>1277</span>  *     Several CCMoveBy actions can be concurrently called, and the resulting                                  &lt;br/>
<span class='line'>1278</span>  *     movement will be the sum of individual movements.
<span class='line'>1279</span>  * &lt;/p>
<span class='line'>1280</span>  * @class
<span class='line'>1281</span>  * @extends cc.ActionInterval
<span class='line'>1282</span>  * @param {Number} duration duration in seconds
<span class='line'>1283</span>  * @param {cc.Point|Number} deltaPos
<span class='line'>1284</span>  * @param {Number} [deltaY]
<span class='line'>1285</span>  * @example
<span class='line'>1286</span>  * var actionTo = cc.moveBy(2, cc.p(windowSize.width - 40, windowSize.height - 40));
<span class='line'>1287</span>  */</span><span class="WHIT">
<span class='line'>1288</span> </span><span class="NAME">cc.MoveBy</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.ActionInterval.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.MoveBy# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1289</span> </span><span class="WHIT">    </span><span class="NAME">_positionDelta</span><span class="PUNC">:</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1290</span> </span><span class="WHIT">    </span><span class="NAME">_startPosition</span><span class="PUNC">:</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1291</span> </span><span class="WHIT">    </span><span class="NAME">_previousPosition</span><span class="PUNC">:</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1292</span> 
<span class='line'>1293</span> </span><span class="WHIT">	</span><span class="COMM">/**
<span class='line'>1294</span>      * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
<span class='line'>1295</span> 	 * @param {Number} duration duration in seconds
<span class='line'>1296</span> 	 * @param {cc.Point|Number} deltaPos
<span class='line'>1297</span> 	 * @param {Number} [deltaY]
<span class='line'>1298</span> 	 */</span><span class="WHIT">
<span class='line'>1299</span> </span><span class="WHIT">    </span><span class="NAME">ctor</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">deltaPos</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">deltaY</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1300</span> </span><span class="WHIT">        </span><span class="NAME">cc.ActionInterval.prototype.ctor.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1301</span> 
<span class='line'>1302</span> </span><span class="WHIT">        </span><span class="NAME">this._positionDelta</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1303</span> </span><span class="WHIT">        </span><span class="NAME">this._startPosition</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1304</span> </span><span class="WHIT">        </span><span class="NAME">this._previousPosition</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1305</span> 
<span class='line'>1306</span> </span><span class="WHIT">		</span><span class="NAME">deltaPos</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="NAME">undefined</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">this.initWithDuration</span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">deltaPos</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">deltaY</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1307</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1308</span> 
<span class='line'>1309</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1310</span>      * Initializes the action.
<span class='line'>1311</span>      * @param {Number} duration duration in seconds
<span class='line'>1312</span>      * @param {cc.Point} position
<span class='line'>1313</span>      * @param {Number} [y]
<span class='line'>1314</span>      * @return {Boolean}
<span class='line'>1315</span>      */</span><span class="WHIT">
<span class='line'>1316</span> </span><span class="WHIT">    </span><span class="NAME">initWithDuration</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">position</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">y</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1317</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">cc.ActionInterval.prototype.initWithDuration.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">duration</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1318</span> </span><span class="WHIT">	        </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="NAME">position.x</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="NAME">undefined</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1319</span> </span><span class="WHIT">		        </span><span class="NAME">y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">position.y</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1320</span> </span><span class="WHIT">		        </span><span class="NAME">position</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">position.x</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1321</span> </span><span class="WHIT">	        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1322</span> 
<span class='line'>1323</span> </span><span class="WHIT">            </span><span class="NAME">this._positionDelta.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">position</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1324</span> </span><span class="WHIT">            </span><span class="NAME">this._positionDelta.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">y</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1325</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1326</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1327</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1328</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1329</span> 
<span class='line'>1330</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1331</span>      * returns a new clone of the action
<span class='line'>1332</span>      * @returns {cc.MoveBy}
<span class='line'>1333</span>      */</span><span class="WHIT">
<span class='line'>1334</span> </span><span class="WHIT">    </span><span class="NAME">clone</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1335</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.MoveBy</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1336</span> </span><span class="WHIT">        </span><span class="NAME">this._cloneDecoration</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1337</span> </span><span class="WHIT">        </span><span class="NAME">action.initWithDuration</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._positionDelta</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1338</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1339</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1340</span> 
<span class='line'>1341</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1342</span>      * Start the action with target.
<span class='line'>1343</span>      * @param {cc.Node} target
<span class='line'>1344</span>      */</span><span class="WHIT">
<span class='line'>1345</span> </span><span class="WHIT">    </span><span class="NAME">startWithTarget</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">target</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1346</span> </span><span class="WHIT">        </span><span class="NAME">cc.ActionInterval.prototype.startWithTarget.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">target</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1347</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locPosX</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">target.getPositionX</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1348</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locPosY</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">target.getPositionY</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1349</span> </span><span class="WHIT">        </span><span class="NAME">this._previousPosition.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">locPosX</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1350</span> </span><span class="WHIT">        </span><span class="NAME">this._previousPosition.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">locPosY</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1351</span> </span><span class="WHIT">        </span><span class="NAME">this._startPosition.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">locPosX</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1352</span> </span><span class="WHIT">        </span><span class="NAME">this._startPosition.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">locPosY</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1353</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1354</span> 
<span class='line'>1355</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1356</span>      * Called once per frame. Time is the number of seconds of a frame interval.
<span class='line'>1357</span>      * @param {Number} dt
<span class='line'>1358</span>      */</span><span class="WHIT">
<span class='line'>1359</span> </span><span class="WHIT">    </span><span class="NAME">update</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1360</span> </span><span class="WHIT">        </span><span class="NAME">dt</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._computeEaseTime</span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1361</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this.target</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1362</span> </span><span class="WHIT">            </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._positionDelta.x</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">dt</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1363</span> </span><span class="WHIT">            </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._positionDelta.y</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">dt</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1364</span> </span><span class="WHIT">            </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locStartPosition</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._startPosition</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1365</span> </span><span class="WHIT">            </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">cc.ENABLE_STACKABLE_ACTIONS</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1366</span> </span><span class="WHIT">                </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">targetX</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.target.getPositionX</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1367</span> </span><span class="WHIT">                </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">targetY</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.target.getPositionY</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1368</span> </span><span class="WHIT">                </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locPreviousPosition</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._previousPosition</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1369</span> 
<span class='line'>1370</span> </span><span class="WHIT">                </span><span class="NAME">locStartPosition.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">locStartPosition.x</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NAME">targetX</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">locPreviousPosition.x</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1371</span> </span><span class="WHIT">                </span><span class="NAME">locStartPosition.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">locStartPosition.y</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NAME">targetY</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">locPreviousPosition.y</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1372</span> </span><span class="WHIT">                </span><span class="NAME">x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">x</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NAME">locStartPosition.x</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1373</span> </span><span class="WHIT">                </span><span class="NAME">y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">y</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NAME">locStartPosition.y</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1374</span> </span><span class="WHIT">	            </span><span class="NAME">locPreviousPosition.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">x</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1375</span> </span><span class="WHIT">	            </span><span class="NAME">locPreviousPosition.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">y</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1376</span> </span><span class="WHIT">	            </span><span class="NAME">this.target.setPosition</span><span class="PUNC">(</span><span class="NAME">x</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">y</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1377</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT"> </span><span class="KEYW">else</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1378</span> </span><span class="WHIT">                </span><span class="NAME">this.target.setPosition</span><span class="PUNC">(</span><span class="NAME">locStartPosition.x</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NAME">x</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">locStartPosition.y</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NAME">y</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1379</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1380</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1381</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1382</span> 
<span class='line'>1383</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1384</span>      * MoveTo reverse is not implemented
<span class='line'>1385</span>      * @return {cc.MoveBy}
<span class='line'>1386</span>      */</span><span class="WHIT">
<span class='line'>1387</span> </span><span class="WHIT">    </span><span class="NAME">reverse</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1388</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.MoveBy</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="PUNC">-</span><span class="NAME">this._positionDelta.x</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="NAME">this._positionDelta.y</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1389</span> </span><span class="WHIT">        </span><span class="NAME">this._cloneDecoration</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1390</span> </span><span class="WHIT">        </span><span class="NAME">this._reverseEaseList</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1391</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1392</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1393</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1394</span> 
<span class='line'>1395</span> </span><span class="COMM">/**
<span class='line'>1396</span>  * Create the action.
<span class='line'>1397</span>  * Relative to its coordinate moves a certain distance.
<span class='line'>1398</span>  * @function
<span class='line'>1399</span>  * @param {Number} duration duration in seconds
<span class='line'>1400</span>  * @param {cc.Point|Number} deltaPos
<span class='line'>1401</span>  * @param {Number} deltaY
<span class='line'>1402</span>  * @return {cc.MoveBy}
<span class='line'>1403</span>  * @example
<span class='line'>1404</span>  * // example
<span class='line'>1405</span>  * var actionTo = cc.moveBy(2, cc.p(windowSize.width - 40, windowSize.height - 40));
<span class='line'>1406</span>  */</span><span class="WHIT">
<span class='line'>1407</span> </span><span class="NAME">cc.moveBy</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">deltaPos</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">deltaY</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1408</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.MoveBy</span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">deltaPos</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">deltaY</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1409</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1410</span> </span><span class="COMM">/**
<span class='line'>1411</span>  * Please use cc.moveBy instead.
<span class='line'>1412</span>  * Relative to its coordinate moves a certain distance.
<span class='line'>1413</span>  * @static
<span class='line'>1414</span>  * @deprecated since v3.0 please use cc.moveBy instead.
<span class='line'>1415</span>  * @param {Number} duration duration in seconds
<span class='line'>1416</span>  * @param {cc.Point|Number} deltaPos
<span class='line'>1417</span>  * @param {Number} deltaY
<span class='line'>1418</span>  * @return {cc.MoveBy}
<span class='line'>1419</span>  */</span><span class="WHIT">
<span class='line'>1420</span> </span><span class="NAME">cc.MoveBy.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.moveBy</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1421</span> 
<span class='line'>1422</span> 
<span class='line'>1423</span> </span><span class="COMM">/**
<span class='line'>1424</span>  * Moves a CCNode object to the position x,y. x and y are absolute coordinates by modifying it's position attribute. &lt;br/>
<span class='line'>1425</span>  * Several CCMoveTo actions can be concurrently called, and the resulting                                            &lt;br/>
<span class='line'>1426</span>  * movement will be the sum of individual movements.
<span class='line'>1427</span>  * @class
<span class='line'>1428</span>  * @extends cc.MoveBy
<span class='line'>1429</span>  * @param {Number} duration duration in seconds
<span class='line'>1430</span>  * @param {cc.Point|Number} position
<span class='line'>1431</span>  * @param {Number} y
<span class='line'>1432</span>  * @example
<span class='line'>1433</span>  * var actionBy = new cc.MoveTo(2, cc.p(80, 80));
<span class='line'>1434</span>  */</span><span class="WHIT">
<span class='line'>1435</span> </span><span class="NAME">cc.MoveTo</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.MoveBy.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.MoveTo# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1436</span> </span><span class="WHIT">    </span><span class="NAME">_endPosition</span><span class="PUNC">:</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1437</span> 
<span class='line'>1438</span> </span><span class="WHIT">	</span><span class="COMM">/**
<span class='line'>1439</span>      * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
<span class='line'>1440</span> 	 * @param {Number} duration duration in seconds
<span class='line'>1441</span> 	 * @param {cc.Point|Number} position
<span class='line'>1442</span> 	 * @param {Number} y
<span class='line'>1443</span> 	 */</span><span class="WHIT">
<span class='line'>1444</span> </span><span class="WHIT">    </span><span class="NAME">ctor</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">position</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">y</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1445</span> </span><span class="WHIT">        </span><span class="NAME">cc.MoveBy.prototype.ctor.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1446</span> </span><span class="WHIT">        </span><span class="NAME">this._endPosition</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1447</span> 
<span class='line'>1448</span> </span><span class="WHIT">		</span><span class="NAME">position</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="NAME">undefined</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">this.initWithDuration</span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">position</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">y</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1449</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1450</span> 
<span class='line'>1451</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1452</span>      * Initializes the action.
<span class='line'>1453</span>      * @param {Number} duration  duration in seconds
<span class='line'>1454</span>      * @param {cc.Point} position
<span class='line'>1455</span>      * @param {Number} y
<span class='line'>1456</span>      * @return {Boolean}
<span class='line'>1457</span>      */</span><span class="WHIT">
<span class='line'>1458</span> </span><span class="WHIT">    </span><span class="NAME">initWithDuration</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">position</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">y</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1459</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">cc.MoveBy.prototype.initWithDuration.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">position</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">y</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1460</span> </span><span class="WHIT">	        </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="NAME">position.x</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="NAME">undefined</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1461</span> </span><span class="WHIT">		        </span><span class="NAME">y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">position.y</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1462</span> </span><span class="WHIT">		        </span><span class="NAME">position</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">position.x</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1463</span> </span><span class="WHIT">	        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1464</span> 
<span class='line'>1465</span> </span><span class="WHIT">            </span><span class="NAME">this._endPosition.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">position</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1466</span> </span><span class="WHIT">            </span><span class="NAME">this._endPosition.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">y</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1467</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1468</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1469</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1470</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1471</span> 
<span class='line'>1472</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1473</span>      * returns a new clone of the action
<span class='line'>1474</span>      * @returns {cc.MoveTo}
<span class='line'>1475</span>      */</span><span class="WHIT">
<span class='line'>1476</span> </span><span class="WHIT">    </span><span class="NAME">clone</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1477</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.MoveTo</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1478</span> </span><span class="WHIT">        </span><span class="NAME">this._cloneDecoration</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1479</span> </span><span class="WHIT">        </span><span class="NAME">action.initWithDuration</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._endPosition</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1480</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1481</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1482</span> 
<span class='line'>1483</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1484</span>      * Start the action with target.
<span class='line'>1485</span>      * @param {cc.Node} target
<span class='line'>1486</span>      */</span><span class="WHIT">
<span class='line'>1487</span> </span><span class="WHIT">    </span><span class="NAME">startWithTarget</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">target</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1488</span> </span><span class="WHIT">        </span><span class="NAME">cc.MoveBy.prototype.startWithTarget.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">target</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1489</span> </span><span class="WHIT">        </span><span class="NAME">this._positionDelta.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._endPosition.x</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">target.getPositionX</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1490</span> </span><span class="WHIT">        </span><span class="NAME">this._positionDelta.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._endPosition.y</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">target.getPositionY</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1491</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1492</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1493</span> 
<span class='line'>1494</span> </span><span class="COMM">/**
<span class='line'>1495</span>  * Create new action.
<span class='line'>1496</span>  * Moving to the specified coordinates.
<span class='line'>1497</span>  * @function
<span class='line'>1498</span>  * @param {Number} duration duration in seconds
<span class='line'>1499</span>  * @param {cc.Point} position
<span class='line'>1500</span>  * @param {Number} y
<span class='line'>1501</span>  * @return {cc.MoveBy}
<span class='line'>1502</span>  * @example
<span class='line'>1503</span>  * // example
<span class='line'>1504</span>  * var actionBy = cc.moveTo(2, cc.p(80, 80));
<span class='line'>1505</span>  */</span><span class="WHIT">
<span class='line'>1506</span> </span><span class="NAME">cc.moveTo</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">position</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">y</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1507</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.MoveTo</span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">position</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">y</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1508</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1509</span> </span><span class="COMM">/**
<span class='line'>1510</span>  * Please use cc.moveTo instead.
<span class='line'>1511</span>  * Moving to the specified coordinates.
<span class='line'>1512</span>  * @static
<span class='line'>1513</span>  * @deprecated since v3.0 &lt;br /> Please use cc.moveTo instead.
<span class='line'>1514</span>  * @param {Number} duration duration in seconds
<span class='line'>1515</span>  * @param {cc.Point} position
<span class='line'>1516</span>  * @param {Number} y
<span class='line'>1517</span>  * @return {cc.MoveBy}
<span class='line'>1518</span>  */</span><span class="WHIT">
<span class='line'>1519</span> </span><span class="NAME">cc.MoveTo.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.moveTo</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1520</span> 
<span class='line'>1521</span> </span><span class="COMM">/**
<span class='line'>1522</span>  * Skews a cc.Node object to given angles by modifying it's skewX and skewY attributes
<span class='line'>1523</span>  * @class
<span class='line'>1524</span>  * @extends cc.ActionInterval
<span class='line'>1525</span>  * @param {Number} t time in seconds
<span class='line'>1526</span>  * @param {Number} sx
<span class='line'>1527</span>  * @param {Number} sy
<span class='line'>1528</span>  * @example
<span class='line'>1529</span>  * var actionTo = new cc.SkewTo(2, 37.2, -37.2);
<span class='line'>1530</span>  */</span><span class="WHIT">
<span class='line'>1531</span> </span><span class="NAME">cc.SkewTo</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.ActionInterval.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.SkewTo# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1532</span> </span><span class="WHIT">    </span><span class="NAME">_skewX</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1533</span> </span><span class="WHIT">    </span><span class="NAME">_skewY</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1534</span> </span><span class="WHIT">    </span><span class="NAME">_startSkewX</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1535</span> </span><span class="WHIT">    </span><span class="NAME">_startSkewY</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1536</span> </span><span class="WHIT">    </span><span class="NAME">_endSkewX</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1537</span> </span><span class="WHIT">    </span><span class="NAME">_endSkewY</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1538</span> </span><span class="WHIT">    </span><span class="NAME">_deltaX</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1539</span> </span><span class="WHIT">    </span><span class="NAME">_deltaY</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1540</span> 
<span class='line'>1541</span> </span><span class="WHIT">	</span><span class="COMM">/**
<span class='line'>1542</span>      * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
<span class='line'>1543</span> 	 * @param {Number} t time in seconds
<span class='line'>1544</span> 	 * @param {Number} sx
<span class='line'>1545</span> 	 * @param {Number} sy
<span class='line'>1546</span> 	 */</span><span class="WHIT">
<span class='line'>1547</span> </span><span class="WHIT">    </span><span class="NAME">ctor</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">sx</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">sy</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1548</span> </span><span class="WHIT">        </span><span class="NAME">cc.ActionInterval.prototype.ctor.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1549</span> 
<span class='line'>1550</span> </span><span class="WHIT">		</span><span class="NAME">sy</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="NAME">undefined</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">this.initWithDuration</span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">sx</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">sy</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1551</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1552</span> 
<span class='line'>1553</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1554</span>      * Initializes the action.
<span class='line'>1555</span>      * @param {Number} t time in seconds
<span class='line'>1556</span>      * @param {Number} sx
<span class='line'>1557</span>      * @param {Number} sy
<span class='line'>1558</span>      * @return {Boolean}
<span class='line'>1559</span>      */</span><span class="WHIT">
<span class='line'>1560</span> </span><span class="WHIT">    </span><span class="NAME">initWithDuration</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">sx</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">sy</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1561</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">ret</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1562</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">cc.ActionInterval.prototype.initWithDuration.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">t</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1563</span> </span><span class="WHIT">            </span><span class="NAME">this._endSkewX</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">sx</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1564</span> </span><span class="WHIT">            </span><span class="NAME">this._endSkewY</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">sy</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1565</span> </span><span class="WHIT">            </span><span class="NAME">ret</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1566</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1567</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">ret</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1568</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1569</span> 
<span class='line'>1570</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1571</span>      * returns a new clone of the action
<span class='line'>1572</span>      * @returns {cc.SkewTo}
<span class='line'>1573</span>      */</span><span class="WHIT">
<span class='line'>1574</span> </span><span class="WHIT">    </span><span class="NAME">clone</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1575</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.SkewTo</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1576</span> </span><span class="WHIT">        </span><span class="NAME">this._cloneDecoration</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1577</span> </span><span class="WHIT">        </span><span class="NAME">action.initWithDuration</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._endSkewX</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._endSkewY</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1578</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1579</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1580</span> 
<span class='line'>1581</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1582</span>      * Start the action with target.
<span class='line'>1583</span>      * @param {cc.Node} target
<span class='line'>1584</span>      */</span><span class="WHIT">
<span class='line'>1585</span> </span><span class="WHIT">    </span><span class="NAME">startWithTarget</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">target</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1586</span> </span><span class="WHIT">        </span><span class="NAME">cc.ActionInterval.prototype.startWithTarget.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">target</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1587</span> 
<span class='line'>1588</span> </span><span class="WHIT">        </span><span class="NAME">this._startSkewX</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">target.skewX</span><span class="WHIT"> </span><span class="PUNC">%</span><span class="WHIT"> </span><span class="NUMB">180</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1589</span> </span><span class="WHIT">        </span><span class="NAME">this._deltaX</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._endSkewX</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">this._startSkewX</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1590</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this._deltaX</span><span class="WHIT"> </span><span class="PUNC">></span><span class="WHIT"> </span><span class="NUMB">180</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>1591</span> </span><span class="WHIT">            </span><span class="NAME">this._deltaX</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">360</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1592</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this._deltaX</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="NUMB">180</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>1593</span> </span><span class="WHIT">            </span><span class="NAME">this._deltaX</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">360</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1594</span> 
<span class='line'>1595</span> </span><span class="WHIT">        </span><span class="NAME">this._startSkewY</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">target.skewY</span><span class="WHIT"> </span><span class="PUNC">%</span><span class="WHIT"> </span><span class="NUMB">360</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1596</span> </span><span class="WHIT">        </span><span class="NAME">this._deltaY</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._endSkewY</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">this._startSkewY</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1597</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this._deltaY</span><span class="WHIT"> </span><span class="PUNC">></span><span class="WHIT"> </span><span class="NUMB">180</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>1598</span> </span><span class="WHIT">            </span><span class="NAME">this._deltaY</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">360</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1599</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this._deltaY</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="NUMB">180</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>1600</span> </span><span class="WHIT">            </span><span class="NAME">this._deltaY</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">360</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1601</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1602</span> 
<span class='line'>1603</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1604</span>      * Called once per frame. Time is the number of seconds of a frame interval.
<span class='line'>1605</span>      * @param {Number} dt
<span class='line'>1606</span>      */</span><span class="WHIT">
<span class='line'>1607</span> </span><span class="WHIT">    </span><span class="NAME">update</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1608</span> </span><span class="WHIT">        </span><span class="NAME">dt</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._computeEaseTime</span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1609</span> </span><span class="WHIT">        </span><span class="NAME">this.target.skewX</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._startSkewX</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NAME">this._deltaX</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">dt</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1610</span> </span><span class="WHIT">        </span><span class="NAME">this.target.skewY</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._startSkewY</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NAME">this._deltaY</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">dt</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1611</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1612</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1613</span> </span><span class="COMM">/**
<span class='line'>1614</span>  * Create new action.
<span class='line'>1615</span>  * Skews a cc.Node object to given angles by modifying it's skewX and skewY attributes.
<span class='line'>1616</span>  * Changes to the specified value.
<span class='line'>1617</span>  * @function
<span class='line'>1618</span>  * @param {Number} t time in seconds
<span class='line'>1619</span>  * @param {Number} sx
<span class='line'>1620</span>  * @param {Number} sy
<span class='line'>1621</span>  * @return {cc.SkewTo}
<span class='line'>1622</span>  * @example
<span class='line'>1623</span>  * // example
<span class='line'>1624</span>  * var actionTo = cc.skewTo(2, 37.2, -37.2);
<span class='line'>1625</span>  */</span><span class="WHIT">
<span class='line'>1626</span> </span><span class="NAME">cc.skewTo</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">sx</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">sy</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1627</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.SkewTo</span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">sx</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">sy</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1628</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1629</span> </span><span class="COMM">/**
<span class='line'>1630</span>  * Please use cc.skewTo instead.
<span class='line'>1631</span>  * Skews a cc.Node object to given angles by modifying it's skewX and skewY attributes。
<span class='line'>1632</span>  * Changes to the specified value.
<span class='line'>1633</span>  * @static
<span class='line'>1634</span>  * @deprecated since v3.0 &lt;br /> Please use cc.skewTo instead.
<span class='line'>1635</span>  * @param {Number} t time in seconds
<span class='line'>1636</span>  * @param {Number} sx
<span class='line'>1637</span>  * @param {Number} sy
<span class='line'>1638</span>  * @return {cc.SkewTo}
<span class='line'>1639</span>  */</span><span class="WHIT">
<span class='line'>1640</span> </span><span class="NAME">cc.SkewTo.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.skewTo</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1641</span> 
<span class='line'>1642</span> </span><span class="COMM">/**
<span class='line'>1643</span>  * Skews a cc.Node object by skewX and skewY degrees.
<span class='line'>1644</span>  * Relative to its attribute modification.
<span class='line'>1645</span>  * @class
<span class='line'>1646</span>  * @extends cc.SkewTo
<span class='line'>1647</span>  * @param {Number} t time in seconds
<span class='line'>1648</span>  * @param {Number} sx  skew in degrees for X axis
<span class='line'>1649</span>  * @param {Number} sy  skew in degrees for Y axis
<span class='line'>1650</span>  */</span><span class="WHIT">
<span class='line'>1651</span> </span><span class="NAME">cc.SkewBy</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.SkewTo.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.SkewBy# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1652</span> 
<span class='line'>1653</span> </span><span class="WHIT">	</span><span class="COMM">/**
<span class='line'>1654</span>      * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
<span class='line'>1655</span> 	 * @param {Number} t time in seconds
<span class='line'>1656</span> 	 * @param {Number} sx  skew in degrees for X axis
<span class='line'>1657</span> 	 * @param {Number} sy  skew in degrees for Y axis
<span class='line'>1658</span> 	 */</span><span class="WHIT">
<span class='line'>1659</span> </span><span class="WHIT">	</span><span class="NAME">ctor</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">sx</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">sy</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1660</span> </span><span class="WHIT">		</span><span class="NAME">cc.SkewTo.prototype.ctor.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1661</span> </span><span class="WHIT">		</span><span class="NAME">sy</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="NAME">undefined</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">this.initWithDuration</span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">sx</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">sy</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1662</span> </span><span class="WHIT">	</span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1663</span> 
<span class='line'>1664</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1665</span>      * Initializes the action.
<span class='line'>1666</span>      * @param {Number} t time in seconds
<span class='line'>1667</span>      * @param {Number} deltaSkewX  skew in degrees for X axis
<span class='line'>1668</span>      * @param {Number} deltaSkewY  skew in degrees for Y axis
<span class='line'>1669</span>      * @return {Boolean}
<span class='line'>1670</span>      */</span><span class="WHIT">
<span class='line'>1671</span> </span><span class="WHIT">    </span><span class="NAME">initWithDuration</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">deltaSkewX</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">deltaSkewY</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1672</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">ret</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1673</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">cc.SkewTo.prototype.initWithDuration.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">deltaSkewX</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">deltaSkewY</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1674</span> </span><span class="WHIT">            </span><span class="NAME">this._skewX</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">deltaSkewX</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1675</span> </span><span class="WHIT">            </span><span class="NAME">this._skewY</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">deltaSkewY</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1676</span> </span><span class="WHIT">            </span><span class="NAME">ret</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1677</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1678</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">ret</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1679</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1680</span> 
<span class='line'>1681</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1682</span>      * returns a new clone of the action
<span class='line'>1683</span>      * @returns {cc.SkewBy}
<span class='line'>1684</span>      */</span><span class="WHIT">
<span class='line'>1685</span> </span><span class="WHIT">    </span><span class="NAME">clone</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1686</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.SkewBy</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1687</span> </span><span class="WHIT">        </span><span class="NAME">this._cloneDecoration</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1688</span> </span><span class="WHIT">        </span><span class="NAME">action.initWithDuration</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._skewX</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._skewY</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1689</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1690</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1691</span> 
<span class='line'>1692</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1693</span>      * Start the action width target.
<span class='line'>1694</span>      * @param {cc.Node} target
<span class='line'>1695</span>      */</span><span class="WHIT">
<span class='line'>1696</span> </span><span class="WHIT">    </span><span class="NAME">startWithTarget</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">target</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1697</span> </span><span class="WHIT">        </span><span class="NAME">cc.SkewTo.prototype.startWithTarget.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">target</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1698</span> </span><span class="WHIT">        </span><span class="NAME">this._deltaX</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._skewX</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1699</span> </span><span class="WHIT">        </span><span class="NAME">this._deltaY</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._skewY</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1700</span> </span><span class="WHIT">        </span><span class="NAME">this._endSkewX</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._startSkewX</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NAME">this._deltaX</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1701</span> </span><span class="WHIT">        </span><span class="NAME">this._endSkewY</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._startSkewY</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NAME">this._deltaY</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1702</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1703</span> 
<span class='line'>1704</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1705</span>      * Returns a reversed action.
<span class='line'>1706</span>      * @return {cc.SkewBy}
<span class='line'>1707</span>      */</span><span class="WHIT">
<span class='line'>1708</span> </span><span class="WHIT">    </span><span class="NAME">reverse</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1709</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.SkewBy</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="NAME">this._skewX</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="NAME">this._skewY</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1710</span> </span><span class="WHIT">        </span><span class="NAME">this._cloneDecoration</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1711</span> </span><span class="WHIT">        </span><span class="NAME">this._reverseEaseList</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1712</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1713</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1714</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1715</span> 
<span class='line'>1716</span> </span><span class="COMM">/**
<span class='line'>1717</span>  * Skews a cc.Node object by skewX and skewY degrees. &lt;br />
<span class='line'>1718</span>  * Relative to its attribute modification.
<span class='line'>1719</span>  * @function
<span class='line'>1720</span>  * @param {Number} t time in seconds
<span class='line'>1721</span>  * @param {Number} sx sx skew in degrees for X axis
<span class='line'>1722</span>  * @param {Number} sy sy skew in degrees for Y axis
<span class='line'>1723</span>  * @return {cc.SkewBy}
<span class='line'>1724</span>  * @example
<span class='line'>1725</span>  * // example
<span class='line'>1726</span>  * var actionBy = cc.skewBy(2, 0, -90);
<span class='line'>1727</span>  */</span><span class="WHIT">
<span class='line'>1728</span> </span><span class="NAME">cc.skewBy</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">sx</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">sy</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1729</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.SkewBy</span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">sx</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">sy</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1730</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1731</span> </span><span class="COMM">/**
<span class='line'>1732</span>  * Please use cc.skewBy instead. &lt;br />
<span class='line'>1733</span>  * Skews a cc.Node object by skewX and skewY degrees. &lt;br />
<span class='line'>1734</span>  * Relative to its attribute modification.
<span class='line'>1735</span>  * @static
<span class='line'>1736</span>  * @deprecated since v3.0 please use cc.skewBy instead.
<span class='line'>1737</span>  * @param {Number} t time in seconds
<span class='line'>1738</span>  * @param {Number} sx sx skew in degrees for X axis
<span class='line'>1739</span>  * @param {Number} sy sy skew in degrees for Y axis
<span class='line'>1740</span>  * @return {cc.SkewBy}
<span class='line'>1741</span>  */</span><span class="WHIT">
<span class='line'>1742</span> </span><span class="NAME">cc.SkewBy.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.skewBy</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1743</span> 
<span class='line'>1744</span> 
<span class='line'>1745</span> </span><span class="COMM">/**
<span class='line'>1746</span>  * Moves a cc.Node object simulating a parabolic jump movement by modifying it's position attribute.
<span class='line'>1747</span>  * Relative to its movement.
<span class='line'>1748</span>  * @class
<span class='line'>1749</span>  * @extends cc.ActionInterval
<span class='line'>1750</span>  * @param {Number} duration
<span class='line'>1751</span>  * @param {cc.Point|Number} position
<span class='line'>1752</span>  * @param {Number} [y]
<span class='line'>1753</span>  * @param {Number} height
<span class='line'>1754</span>  * @param {Number} jumps
<span class='line'>1755</span>  * @example
<span class='line'>1756</span>  * var actionBy = new cc.JumpBy(2, cc.p(300, 0), 50, 4);
<span class='line'>1757</span>  * var actionBy = new cc.JumpBy(2, 300, 0, 50, 4);
<span class='line'>1758</span>  */</span><span class="WHIT">
<span class='line'>1759</span> </span><span class="NAME">cc.JumpBy</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.ActionInterval.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.JumpBy# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1760</span> </span><span class="WHIT">    </span><span class="NAME">_startPosition</span><span class="PUNC">:</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1761</span> </span><span class="WHIT">    </span><span class="NAME">_delta</span><span class="PUNC">:</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1762</span> </span><span class="WHIT">    </span><span class="NAME">_height</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1763</span> </span><span class="WHIT">    </span><span class="NAME">_jumps</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1764</span> </span><span class="WHIT">    </span><span class="NAME">_previousPosition</span><span class="PUNC">:</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1765</span> 
<span class='line'>1766</span> </span><span class="WHIT">	</span><span class="COMM">/**
<span class='line'>1767</span>      * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
<span class='line'>1768</span> 	 * @param {Number} duration
<span class='line'>1769</span> 	 * @param {cc.Point|Number} position
<span class='line'>1770</span> 	 * @param {Number} [y]
<span class='line'>1771</span> 	 * @param {Number} height
<span class='line'>1772</span> 	 * @param {Number} jumps
<span class='line'>1773</span> 	 */</span><span class="WHIT">
<span class='line'>1774</span> </span><span class="WHIT">    </span><span class="NAME">ctor</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">position</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">y</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">height</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">jumps</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1775</span> </span><span class="WHIT">        </span><span class="NAME">cc.ActionInterval.prototype.ctor.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1776</span> </span><span class="WHIT">        </span><span class="NAME">this._startPosition</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1777</span> </span><span class="WHIT">        </span><span class="NAME">this._previousPosition</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1778</span> </span><span class="WHIT">        </span><span class="NAME">this._delta</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1779</span> 
<span class='line'>1780</span> </span><span class="WHIT">		</span><span class="NAME">height</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="NAME">undefined</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">this.initWithDuration</span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">position</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">y</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">height</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">jumps</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1781</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1782</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1783</span>      * Initializes the action.
<span class='line'>1784</span>      * @param {Number} duration
<span class='line'>1785</span>      * @param {cc.Point|Number} position
<span class='line'>1786</span>      * @param {Number} [y]
<span class='line'>1787</span>      * @param {Number} height
<span class='line'>1788</span>      * @param {Number} jumps
<span class='line'>1789</span>      * @return {Boolean}
<span class='line'>1790</span>      * @example
<span class='line'>1791</span>      * actionBy.initWithDuration(2, cc.p(300, 0), 50, 4);
<span class='line'>1792</span>      * actionBy.initWithDuration(2, 300, 0, 50, 4);
<span class='line'>1793</span>      */</span><span class="WHIT">
<span class='line'>1794</span> </span><span class="WHIT">    </span><span class="NAME">initWithDuration</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">position</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">y</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">height</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">jumps</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1795</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">cc.ActionInterval.prototype.initWithDuration.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">duration</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1796</span> </span><span class="WHIT">	        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">jumps</span><span class="WHIT"> </span><span class="PUNC">===</span><span class="WHIT"> </span><span class="NAME">undefined</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1797</span> </span><span class="WHIT">		        </span><span class="NAME">jumps</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">height</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1798</span> </span><span class="WHIT">		        </span><span class="NAME">height</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">y</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1799</span> </span><span class="WHIT">		        </span><span class="NAME">y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">position.y</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1800</span> </span><span class="WHIT">		        </span><span class="NAME">position</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">position.x</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1801</span> </span><span class="WHIT">	        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1802</span> </span><span class="WHIT">            </span><span class="NAME">this._delta.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">position</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1803</span> </span><span class="WHIT">            </span><span class="NAME">this._delta.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">y</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1804</span> </span><span class="WHIT">            </span><span class="NAME">this._height</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">height</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1805</span> </span><span class="WHIT">            </span><span class="NAME">this._jumps</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">jumps</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1806</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1807</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1808</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1809</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1810</span> 
<span class='line'>1811</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1812</span>      * returns a new clone of the action
<span class='line'>1813</span>      * @returns {cc.JumpBy}
<span class='line'>1814</span>      */</span><span class="WHIT">
<span class='line'>1815</span> </span><span class="WHIT">    </span><span class="NAME">clone</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1816</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.JumpBy</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1817</span> </span><span class="WHIT">        </span><span class="NAME">this._cloneDecoration</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1818</span> </span><span class="WHIT">        </span><span class="NAME">action.initWithDuration</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._delta</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._height</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._jumps</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1819</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1820</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1821</span> 
<span class='line'>1822</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1823</span>      * Start the action with target.
<span class='line'>1824</span>      * @param {cc.Node} target
<span class='line'>1825</span>      */</span><span class="WHIT">
<span class='line'>1826</span> </span><span class="WHIT">    </span><span class="NAME">startWithTarget</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">target</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1827</span> </span><span class="WHIT">        </span><span class="NAME">cc.ActionInterval.prototype.startWithTarget.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">target</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1828</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locPosX</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">target.getPositionX</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1829</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locPosY</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">target.getPositionY</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1830</span> </span><span class="WHIT">        </span><span class="NAME">this._previousPosition.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">locPosX</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1831</span> </span><span class="WHIT">        </span><span class="NAME">this._previousPosition.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">locPosY</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1832</span> </span><span class="WHIT">        </span><span class="NAME">this._startPosition.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">locPosX</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1833</span> </span><span class="WHIT">        </span><span class="NAME">this._startPosition.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">locPosY</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1834</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1835</span> 
<span class='line'>1836</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1837</span>      * Called once per frame. Time is the number of seconds of a frame interval.
<span class='line'>1838</span>      * @param {Number} dt
<span class='line'>1839</span>      */</span><span class="WHIT">
<span class='line'>1840</span> </span><span class="WHIT">    </span><span class="NAME">update</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1841</span> </span><span class="WHIT">        </span><span class="NAME">dt</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._computeEaseTime</span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1842</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this.target</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1843</span> </span><span class="WHIT">            </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">frac</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">dt</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">this._jumps</span><span class="WHIT"> </span><span class="PUNC">%</span><span class="WHIT"> </span><span class="NUMB">1.0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1844</span> </span><span class="WHIT">            </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._height</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NUMB">4</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">frac</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NUMB">1</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">frac</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1845</span> </span><span class="WHIT">            </span><span class="NAME">y</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._delta.y</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">dt</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1846</span> 
<span class='line'>1847</span> </span><span class="WHIT">            </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._delta.x</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">dt</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1848</span> </span><span class="WHIT">            </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locStartPosition</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._startPosition</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1849</span> </span><span class="WHIT">            </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">cc.ENABLE_STACKABLE_ACTIONS</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1850</span> </span><span class="WHIT">                </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">targetX</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.target.getPositionX</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1851</span> </span><span class="WHIT">                </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">targetY</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.target.getPositionY</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1852</span> </span><span class="WHIT">                </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locPreviousPosition</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._previousPosition</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1853</span> 
<span class='line'>1854</span> </span><span class="WHIT">                </span><span class="NAME">locStartPosition.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">locStartPosition.x</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NAME">targetX</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">locPreviousPosition.x</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1855</span> </span><span class="WHIT">                </span><span class="NAME">locStartPosition.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">locStartPosition.y</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NAME">targetY</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">locPreviousPosition.y</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1856</span> </span><span class="WHIT">                </span><span class="NAME">x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">x</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NAME">locStartPosition.x</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1857</span> </span><span class="WHIT">                </span><span class="NAME">y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">y</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NAME">locStartPosition.y</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1858</span> </span><span class="WHIT">	            </span><span class="NAME">locPreviousPosition.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">x</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1859</span> </span><span class="WHIT">	            </span><span class="NAME">locPreviousPosition.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">y</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1860</span> </span><span class="WHIT">	            </span><span class="NAME">this.target.setPosition</span><span class="PUNC">(</span><span class="NAME">x</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">y</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1861</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT"> </span><span class="KEYW">else</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1862</span> </span><span class="WHIT">                </span><span class="NAME">this.target.setPosition</span><span class="PUNC">(</span><span class="NAME">locStartPosition.x</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NAME">x</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">locStartPosition.y</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NAME">y</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1863</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1864</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1865</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1866</span> 
<span class='line'>1867</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1868</span>      * Returns a reversed action.
<span class='line'>1869</span>      * @return {cc.JumpBy}
<span class='line'>1870</span>      */</span><span class="WHIT">
<span class='line'>1871</span> </span><span class="WHIT">    </span><span class="NAME">reverse</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1872</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.JumpBy</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="PUNC">-</span><span class="NAME">this._delta.x</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="NAME">this._delta.y</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._height</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._jumps</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1873</span> </span><span class="WHIT">        </span><span class="NAME">this._cloneDecoration</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1874</span> </span><span class="WHIT">        </span><span class="NAME">this._reverseEaseList</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1875</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1876</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1877</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1878</span> 
<span class='line'>1879</span> </span><span class="COMM">/**
<span class='line'>1880</span>  * Moves a cc.Node object simulating a parabolic jump movement by modifying it's position attribute.
<span class='line'>1881</span>  * Relative to its movement.
<span class='line'>1882</span>  * @function
<span class='line'>1883</span>  * @param {Number} duration
<span class='line'>1884</span>  * @param {cc.Point|Number} position
<span class='line'>1885</span>  * @param {Number} [y]
<span class='line'>1886</span>  * @param {Number} height
<span class='line'>1887</span>  * @param {Number} jumps
<span class='line'>1888</span>  * @return {cc.JumpBy}
<span class='line'>1889</span>  * @example
<span class='line'>1890</span>  * // example
<span class='line'>1891</span>  * var actionBy = cc.jumpBy(2, cc.p(300, 0), 50, 4);
<span class='line'>1892</span>  * var actionBy = cc.jumpBy(2, 300, 0, 50, 4);
<span class='line'>1893</span>  */</span><span class="WHIT">
<span class='line'>1894</span> </span><span class="NAME">cc.jumpBy</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">position</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">y</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">height</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">jumps</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1895</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.JumpBy</span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">position</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">y</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">height</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">jumps</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1896</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1897</span> </span><span class="COMM">/**
<span class='line'>1898</span>  * Please use cc.jumpBy instead. &lt;br />
<span class='line'>1899</span>  * Moves a cc.Node object simulating a parabolic jump movement by modifying it's position attribute. &lt;br />
<span class='line'>1900</span>  * Relative to its movement.
<span class='line'>1901</span>  * @static
<span class='line'>1902</span>  * @deprecated since v3.0 please use cc.jumpBy instead.
<span class='line'>1903</span>  * @param {Number} duration
<span class='line'>1904</span>  * @param {cc.Point|Number} position
<span class='line'>1905</span>  * @param {Number} [y]
<span class='line'>1906</span>  * @param {Number} height
<span class='line'>1907</span>  * @param {Number} jumps
<span class='line'>1908</span>  * @return {cc.JumpBy}
<span class='line'>1909</span>  */</span><span class="WHIT">
<span class='line'>1910</span> </span><span class="NAME">cc.JumpBy.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.jumpBy</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1911</span> 
<span class='line'>1912</span> </span><span class="COMM">/**
<span class='line'>1913</span>  * Moves a cc.Node object to a parabolic position simulating a jump movement by modifying it's position attribute. &lt;br />
<span class='line'>1914</span>  * Jump to the specified location.
<span class='line'>1915</span>  * @class
<span class='line'>1916</span>  * @extends cc.JumpBy
<span class='line'>1917</span>  * @param {Number} duration
<span class='line'>1918</span>  * @param {cc.Point|Number} position
<span class='line'>1919</span>  * @param {Number} [y]
<span class='line'>1920</span>  * @param {Number} height
<span class='line'>1921</span>  * @param {Number} jumps
<span class='line'>1922</span>  * @example
<span class='line'>1923</span>  * var actionTo = new cc.JumpTo(2, cc.p(300, 0), 50, 4);
<span class='line'>1924</span>  * var actionTo = new cc.JumpTo(2, 300, 0, 50, 4);
<span class='line'>1925</span>  */</span><span class="WHIT">
<span class='line'>1926</span> </span><span class="NAME">cc.JumpTo</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.JumpBy.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.JumpTo# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1927</span> </span><span class="WHIT">    </span><span class="NAME">_endPosition</span><span class="PUNC">:</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1928</span> 
<span class='line'>1929</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1930</span>      * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
<span class='line'>1931</span>      * @param {Number} duration
<span class='line'>1932</span>      * @param {cc.Point|Number} position
<span class='line'>1933</span>      * @param {Number} [y]
<span class='line'>1934</span>      * @param {Number} height
<span class='line'>1935</span>      * @param {Number} jumps
<span class='line'>1936</span>      */</span><span class="WHIT">
<span class='line'>1937</span> </span><span class="WHIT">    </span><span class="NAME">ctor</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">position</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">y</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">height</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">jumps</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1938</span> </span><span class="WHIT">        </span><span class="NAME">cc.JumpBy.prototype.ctor.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1939</span> </span><span class="WHIT">        </span><span class="NAME">this._endPosition</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1940</span> 
<span class='line'>1941</span> </span><span class="WHIT">        </span><span class="NAME">height</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="NAME">undefined</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">this.initWithDuration</span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">position</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">y</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">height</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">jumps</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1942</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1943</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1944</span>      * Initializes the action.
<span class='line'>1945</span>      * @param {Number} duration
<span class='line'>1946</span>      * @param {cc.Point|Number} position
<span class='line'>1947</span>      * @param {Number} [y]
<span class='line'>1948</span>      * @param {Number} height
<span class='line'>1949</span>      * @param {Number} jumps
<span class='line'>1950</span>      * @return {Boolean}
<span class='line'>1951</span>      * @example
<span class='line'>1952</span>      * actionTo.initWithDuration(2, cc.p(300, 0), 50, 4);
<span class='line'>1953</span>      * actionTo.initWithDuration(2, 300, 0, 50, 4);
<span class='line'>1954</span>      */</span><span class="WHIT">
<span class='line'>1955</span> </span><span class="WHIT">    </span><span class="NAME">initWithDuration</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">position</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">y</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">height</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">jumps</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1956</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">cc.JumpBy.prototype.initWithDuration.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">position</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">y</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">height</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">jumps</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1957</span> </span><span class="WHIT">            </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">jumps</span><span class="WHIT"> </span><span class="PUNC">===</span><span class="WHIT"> </span><span class="NAME">undefined</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1958</span> </span><span class="WHIT">                </span><span class="NAME">y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">position.y</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1959</span> </span><span class="WHIT">                </span><span class="NAME">position</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">position.x</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1960</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1961</span> </span><span class="WHIT">            </span><span class="NAME">this._endPosition.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">position</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1962</span> </span><span class="WHIT">            </span><span class="NAME">this._endPosition.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">y</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1963</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1964</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1965</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1966</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1967</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1968</span>      * Start the action with target.
<span class='line'>1969</span>      * @param {cc.Node} target
<span class='line'>1970</span>      */</span><span class="WHIT">
<span class='line'>1971</span> </span><span class="WHIT">    </span><span class="NAME">startWithTarget</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">target</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1972</span> </span><span class="WHIT">        </span><span class="NAME">cc.JumpBy.prototype.startWithTarget.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">target</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1973</span> </span><span class="WHIT">        </span><span class="NAME">this._delta.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._endPosition.x</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">this._startPosition.x</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1974</span> </span><span class="WHIT">        </span><span class="NAME">this._delta.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._endPosition.y</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">this._startPosition.y</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1975</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>1976</span> 
<span class='line'>1977</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>1978</span>      * returns a new clone of the action
<span class='line'>1979</span>      * @returns {cc.JumpTo}
<span class='line'>1980</span>      */</span><span class="WHIT">
<span class='line'>1981</span> </span><span class="WHIT">    </span><span class="NAME">clone</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>1982</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.JumpTo</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1983</span> </span><span class="WHIT">        </span><span class="NAME">this._cloneDecoration</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1984</span> </span><span class="WHIT">        </span><span class="NAME">action.initWithDuration</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._endPosition</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._height</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._jumps</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1985</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1986</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>1987</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>1988</span> 
<span class='line'>1989</span> </span><span class="COMM">/**
<span class='line'>1990</span>  * Moves a cc.Node object to a parabolic position simulating a jump movement by modifying it's position attribute. &lt;br />
<span class='line'>1991</span>  * Jump to the specified location.
<span class='line'>1992</span>  * @function
<span class='line'>1993</span>  * @param {Number} duration
<span class='line'>1994</span>  * @param {cc.Point|Number} position
<span class='line'>1995</span>  * @param {Number} [y]
<span class='line'>1996</span>  * @param {Number} height
<span class='line'>1997</span>  * @param {Number} jumps
<span class='line'>1998</span>  * @return {cc.JumpTo}
<span class='line'>1999</span>  * @example
<span class='line'>2000</span>  * // example
<span class='line'>2001</span>  * var actionTo = cc.jumpTo(2, cc.p(300, 300), 50, 4);
<span class='line'>2002</span>  * var actionTo = cc.jumpTo(2, 300, 300, 50, 4);
<span class='line'>2003</span>  */</span><span class="WHIT">
<span class='line'>2004</span> </span><span class="NAME">cc.jumpTo</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">position</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">y</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">height</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">jumps</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2005</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.JumpTo</span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">position</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">y</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">height</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">jumps</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2006</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2007</span> </span><span class="COMM">/**
<span class='line'>2008</span>  * Please use cc.jumpTo instead.
<span class='line'>2009</span>  * Moves a cc.Node object to a parabolic position simulating a jump movement by modifying it's position attribute. &lt;br />
<span class='line'>2010</span>  * Jump to the specified location.
<span class='line'>2011</span>  * @static
<span class='line'>2012</span>  * @deprecated since v3.0 please use cc.jumpTo instead.
<span class='line'>2013</span>  * @param {Number} duration
<span class='line'>2014</span>  * @param {cc.Point|Number} position
<span class='line'>2015</span>  * @param {Number} [y]
<span class='line'>2016</span>  * @param {Number} height
<span class='line'>2017</span>  * @param {Number} jumps
<span class='line'>2018</span>  * @return {cc.JumpTo}
<span class='line'>2019</span>  */</span><span class="WHIT">
<span class='line'>2020</span> </span><span class="NAME">cc.JumpTo.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.jumpTo</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2021</span> 
<span class='line'>2022</span> </span><span class="COMM">/**
<span class='line'>2023</span>  * @function
<span class='line'>2024</span>  * @param {Number} a
<span class='line'>2025</span>  * @param {Number} b
<span class='line'>2026</span>  * @param {Number} c
<span class='line'>2027</span>  * @param {Number} d
<span class='line'>2028</span>  * @param {Number} t
<span class='line'>2029</span>  * @return {Number}
<span class='line'>2030</span>  */</span><span class="WHIT">
<span class='line'>2031</span> </span><span class="NAME">cc.bezierAt</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">a</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">b</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">c</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">d</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">t</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2032</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">Math.pow</span><span class="PUNC">(</span><span class="NUMB">1</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">3</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">a</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT">
<span class='line'>2033</span> </span><span class="WHIT">        </span><span class="NUMB">3</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">t</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">Math.pow</span><span class="PUNC">(</span><span class="NUMB">1</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">b</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT">
<span class='line'>2034</span> </span><span class="WHIT">        </span><span class="NUMB">3</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">Math.pow</span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NUMB">1</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">t</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">c</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT">
<span class='line'>2035</span> </span><span class="WHIT">        </span><span class="NAME">Math.pow</span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">3</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">d</span><span class="WHIT"> </span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2036</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2037</span> 
<span class='line'>2038</span> </span><span class="COMM">/** An action that moves the target with a cubic Bezier curve by a certain distance.
<span class='line'>2039</span>  * Relative to its movement.
<span class='line'>2040</span>  * @class
<span class='line'>2041</span>  * @extends cc.ActionInterval
<span class='line'>2042</span>  * @param {Number} t time in seconds
<span class='line'>2043</span>  * @param {Array} c Array of points
<span class='line'>2044</span>  * @example
<span class='line'>2045</span>  * var bezier = [cc.p(0, windowSize.height / 2), cc.p(300, -windowSize.height / 2), cc.p(300, 100)];
<span class='line'>2046</span>  * var bezierForward = new cc.BezierBy(3, bezier);
<span class='line'>2047</span>  */</span><span class="WHIT">
<span class='line'>2048</span> </span><span class="NAME">cc.BezierBy</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.ActionInterval.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.BezierBy# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2049</span> </span><span class="WHIT">    </span><span class="NAME">_config</span><span class="PUNC">:</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2050</span> </span><span class="WHIT">    </span><span class="NAME">_startPosition</span><span class="PUNC">:</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2051</span> </span><span class="WHIT">    </span><span class="NAME">_previousPosition</span><span class="PUNC">:</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2052</span> 
<span class='line'>2053</span> </span><span class="WHIT">	</span><span class="COMM">/**
<span class='line'>2054</span>      * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
<span class='line'>2055</span> 	 * @param {Number} t time in seconds
<span class='line'>2056</span> 	 * @param {Array} c Array of points
<span class='line'>2057</span> 	 */</span><span class="WHIT">
<span class='line'>2058</span> </span><span class="WHIT">    </span><span class="NAME">ctor</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">c</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2059</span> </span><span class="WHIT">        </span><span class="NAME">cc.ActionInterval.prototype.ctor.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2060</span> </span><span class="WHIT">        </span><span class="NAME">this._config</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">[</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2061</span> </span><span class="WHIT">        </span><span class="NAME">this._startPosition</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2062</span> </span><span class="WHIT">        </span><span class="NAME">this._previousPosition</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2063</span> 
<span class='line'>2064</span> </span><span class="WHIT">		</span><span class="NAME">c</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">this.initWithDuration</span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">c</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2065</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2066</span> 
<span class='line'>2067</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>2068</span>      * Initializes the action.
<span class='line'>2069</span>      * @param {Number} t time in seconds
<span class='line'>2070</span>      * @param {Array} c Array of points
<span class='line'>2071</span>      * @return {Boolean}
<span class='line'>2072</span>      */</span><span class="WHIT">
<span class='line'>2073</span> </span><span class="WHIT">    </span><span class="NAME">initWithDuration</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">c</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2074</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">cc.ActionInterval.prototype.initWithDuration.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">t</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2075</span> </span><span class="WHIT">            </span><span class="NAME">this._config</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">c</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2076</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2077</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>2078</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2079</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2080</span> 
<span class='line'>2081</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>2082</span>      * returns a new clone of the action
<span class='line'>2083</span>      * @returns {cc.BezierBy}
<span class='line'>2084</span>      */</span><span class="WHIT">
<span class='line'>2085</span> </span><span class="WHIT">    </span><span class="NAME">clone</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2086</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.BezierBy</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2087</span> </span><span class="WHIT">        </span><span class="NAME">this._cloneDecoration</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2088</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">newConfigs</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">[</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2089</span> </span><span class="WHIT">        </span><span class="KEYW">for</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="NAME">this._config.length</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="PUNC">++</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2090</span> </span><span class="WHIT">            </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">selConf</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._config</span><span class="PUNC">[</span><span class="NAME">i</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2091</span> </span><span class="WHIT">            </span><span class="NAME">newConfigs.push</span><span class="PUNC">(</span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NAME">selConf.x</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">selConf.y</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2092</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>2093</span> </span><span class="WHIT">        </span><span class="NAME">action.initWithDuration</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">newConfigs</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2094</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2095</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2096</span> 
<span class='line'>2097</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>2098</span>      * Start the action with target.
<span class='line'>2099</span>      * @param {cc.Node} target
<span class='line'>2100</span>      */</span><span class="WHIT">
<span class='line'>2101</span> </span><span class="WHIT">    </span><span class="NAME">startWithTarget</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">target</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2102</span> </span><span class="WHIT">        </span><span class="NAME">cc.ActionInterval.prototype.startWithTarget.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">target</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2103</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locPosX</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">target.getPositionX</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2104</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locPosY</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">target.getPositionY</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2105</span> </span><span class="WHIT">        </span><span class="NAME">this._previousPosition.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">locPosX</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2106</span> </span><span class="WHIT">        </span><span class="NAME">this._previousPosition.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">locPosY</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2107</span> </span><span class="WHIT">        </span><span class="NAME">this._startPosition.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">locPosX</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2108</span> </span><span class="WHIT">        </span><span class="NAME">this._startPosition.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">locPosY</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2109</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2110</span> 
<span class='line'>2111</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>2112</span>      * Called once per frame. Time is the number of seconds of a frame interval.
<span class='line'>2113</span>      * @param {Number} dt
<span class='line'>2114</span>      */</span><span class="WHIT">
<span class='line'>2115</span> </span><span class="WHIT">    </span><span class="NAME">update</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2116</span> </span><span class="WHIT">        </span><span class="NAME">dt</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._computeEaseTime</span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2117</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this.target</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2118</span> </span><span class="WHIT">            </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locConfig</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._config</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2119</span> </span><span class="WHIT">            </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">xa</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2120</span> </span><span class="WHIT">            </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">xb</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">locConfig</span><span class="PUNC">[</span><span class="NUMB">0</span><span class="PUNC">]</span><span class="PUNC">.</span><span class="NAME">x</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2121</span> </span><span class="WHIT">            </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">xc</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">locConfig</span><span class="PUNC">[</span><span class="NUMB">1</span><span class="PUNC">]</span><span class="PUNC">.</span><span class="NAME">x</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2122</span> </span><span class="WHIT">            </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">xd</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">locConfig</span><span class="PUNC">[</span><span class="NUMB">2</span><span class="PUNC">]</span><span class="PUNC">.</span><span class="NAME">x</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2123</span> 
<span class='line'>2124</span> </span><span class="WHIT">            </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">ya</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2125</span> </span><span class="WHIT">            </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">yb</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">locConfig</span><span class="PUNC">[</span><span class="NUMB">0</span><span class="PUNC">]</span><span class="PUNC">.</span><span class="NAME">y</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2126</span> </span><span class="WHIT">            </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">yc</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">locConfig</span><span class="PUNC">[</span><span class="NUMB">1</span><span class="PUNC">]</span><span class="PUNC">.</span><span class="NAME">y</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2127</span> </span><span class="WHIT">            </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">yd</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">locConfig</span><span class="PUNC">[</span><span class="NUMB">2</span><span class="PUNC">]</span><span class="PUNC">.</span><span class="NAME">y</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2128</span> 
<span class='line'>2129</span> </span><span class="WHIT">            </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.bezierAt</span><span class="PUNC">(</span><span class="NAME">xa</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">xb</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">xc</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">xd</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">dt</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2130</span> </span><span class="WHIT">            </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.bezierAt</span><span class="PUNC">(</span><span class="NAME">ya</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">yb</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">yc</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">yd</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">dt</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2131</span> 
<span class='line'>2132</span> </span><span class="WHIT">            </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locStartPosition</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._startPosition</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2133</span> </span><span class="WHIT">            </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">cc.ENABLE_STACKABLE_ACTIONS</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2134</span> </span><span class="WHIT">                </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">targetX</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.target.getPositionX</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2135</span> </span><span class="WHIT">                </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">targetY</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.target.getPositionY</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2136</span> </span><span class="WHIT">                </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locPreviousPosition</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._previousPosition</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2137</span> 
<span class='line'>2138</span> </span><span class="WHIT">                </span><span class="NAME">locStartPosition.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">locStartPosition.x</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NAME">targetX</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">locPreviousPosition.x</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2139</span> </span><span class="WHIT">                </span><span class="NAME">locStartPosition.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">locStartPosition.y</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NAME">targetY</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">locPreviousPosition.y</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2140</span> </span><span class="WHIT">                </span><span class="NAME">x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">x</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NAME">locStartPosition.x</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2141</span> </span><span class="WHIT">                </span><span class="NAME">y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">y</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NAME">locStartPosition.y</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2142</span> </span><span class="WHIT">	            </span><span class="NAME">locPreviousPosition.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">x</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2143</span> </span><span class="WHIT">	            </span><span class="NAME">locPreviousPosition.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">y</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2144</span> </span><span class="WHIT">	            </span><span class="NAME">this.target.setPosition</span><span class="PUNC">(</span><span class="NAME">x</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">y</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2145</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT"> </span><span class="KEYW">else</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2146</span> </span><span class="WHIT">                </span><span class="NAME">this.target.setPosition</span><span class="PUNC">(</span><span class="NAME">locStartPosition.x</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NAME">x</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">locStartPosition.y</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NAME">y</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2147</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>2148</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>2149</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2150</span> 
<span class='line'>2151</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>2152</span>      * Returns a reversed action.
<span class='line'>2153</span>      * @return {cc.BezierBy}
<span class='line'>2154</span>      */</span><span class="WHIT">
<span class='line'>2155</span> </span><span class="WHIT">    </span><span class="NAME">reverse</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2156</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locConfig</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._config</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2157</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">r</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">[</span><span class="WHIT">
<span class='line'>2158</span> </span><span class="WHIT">            </span><span class="NAME">cc.pAdd</span><span class="PUNC">(</span><span class="NAME">locConfig</span><span class="PUNC">[</span><span class="NUMB">1</span><span class="PUNC">]</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.pNeg</span><span class="PUNC">(</span><span class="NAME">locConfig</span><span class="PUNC">[</span><span class="NUMB">2</span><span class="PUNC">]</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2159</span> </span><span class="WHIT">            </span><span class="NAME">cc.pAdd</span><span class="PUNC">(</span><span class="NAME">locConfig</span><span class="PUNC">[</span><span class="NUMB">0</span><span class="PUNC">]</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.pNeg</span><span class="PUNC">(</span><span class="NAME">locConfig</span><span class="PUNC">[</span><span class="NUMB">2</span><span class="PUNC">]</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2160</span> </span><span class="WHIT">            </span><span class="NAME">cc.pNeg</span><span class="PUNC">(</span><span class="NAME">locConfig</span><span class="PUNC">[</span><span class="NUMB">2</span><span class="PUNC">]</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2161</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.BezierBy</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">r</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2162</span> </span><span class="WHIT">        </span><span class="NAME">this._cloneDecoration</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2163</span> </span><span class="WHIT">        </span><span class="NAME">this._reverseEaseList</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2164</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2165</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>2166</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2167</span> 
<span class='line'>2168</span> </span><span class="COMM">/**
<span class='line'>2169</span>  * An action that moves the target with a cubic Bezier curve by a certain distance.
<span class='line'>2170</span>  * Relative to its movement.
<span class='line'>2171</span>  * @function
<span class='line'>2172</span>  * @param {Number} t time in seconds
<span class='line'>2173</span>  * @param {Array} c Array of points
<span class='line'>2174</span>  * @return {cc.BezierBy}
<span class='line'>2175</span>  * @example
<span class='line'>2176</span>  * // example
<span class='line'>2177</span>  * var bezier = [cc.p(0, windowSize.height / 2), cc.p(300, -windowSize.height / 2), cc.p(300, 100)];
<span class='line'>2178</span>  * var bezierForward = cc.bezierBy(3, bezier);
<span class='line'>2179</span>  */</span><span class="WHIT">
<span class='line'>2180</span> </span><span class="NAME">cc.bezierBy</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">c</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2181</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.BezierBy</span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">c</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2182</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2183</span> </span><span class="COMM">/**
<span class='line'>2184</span>  * Please use cc.bezierBy instead.
<span class='line'>2185</span>  * An action that moves the target with a cubic Bezier curve by a certain distance.
<span class='line'>2186</span>  * Relative to its movement.
<span class='line'>2187</span>  * @static
<span class='line'>2188</span>  * @deprecated since v3.0 please use cc.bezierBy instead.
<span class='line'>2189</span>  * @param {Number} t time in seconds
<span class='line'>2190</span>  * @param {Array} c Array of points
<span class='line'>2191</span>  * @return {cc.BezierBy}
<span class='line'>2192</span>  */</span><span class="WHIT">
<span class='line'>2193</span> </span><span class="NAME">cc.BezierBy.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.bezierBy</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2194</span> 
<span class='line'>2195</span> 
<span class='line'>2196</span> </span><span class="COMM">/** An action that moves the target with a cubic Bezier curve to a destination point.
<span class='line'>2197</span>  * @class
<span class='line'>2198</span>  * @extends cc.BezierBy
<span class='line'>2199</span>  * @param {Number} t
<span class='line'>2200</span>  * @param {Array} c array of points
<span class='line'>2201</span>  * @example
<span class='line'>2202</span>  * var bezier = [cc.p(0, windowSize.height / 2), cc.p(300, -windowSize.height / 2), cc.p(300, 100)];
<span class='line'>2203</span>  * var bezierTo = new cc.BezierTo(2, bezier);
<span class='line'>2204</span>  */</span><span class="WHIT">
<span class='line'>2205</span> </span><span class="NAME">cc.BezierTo</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.BezierBy.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.BezierTo# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2206</span> </span><span class="WHIT">    </span><span class="NAME">_toConfig</span><span class="PUNC">:</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2207</span> 
<span class='line'>2208</span> </span><span class="WHIT">	</span><span class="COMM">/**
<span class='line'>2209</span>      * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
<span class='line'>2210</span> 	 * @param {Number} t
<span class='line'>2211</span> 	 * @param {Array} c array of points
<span class='line'>2212</span> 	 * var bezierTo = new cc.BezierTo(2, bezier);
<span class='line'>2213</span> 	 */</span><span class="WHIT">
<span class='line'>2214</span> </span><span class="WHIT">    </span><span class="NAME">ctor</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">c</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2215</span> </span><span class="WHIT">        </span><span class="NAME">cc.BezierBy.prototype.ctor.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2216</span> </span><span class="WHIT">        </span><span class="NAME">this._toConfig</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">[</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2217</span> </span><span class="WHIT">		</span><span class="NAME">c</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">this.initWithDuration</span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">c</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2218</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2219</span> 
<span class='line'>2220</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>2221</span>      * Initializes the action.
<span class='line'>2222</span>      * @param {Number} t time in seconds
<span class='line'>2223</span>      * @param {Array} c Array of points
<span class='line'>2224</span>      * @return {Boolean}
<span class='line'>2225</span>      */</span><span class="WHIT">
<span class='line'>2226</span> </span><span class="WHIT">    </span><span class="NAME">initWithDuration</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">c</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2227</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">cc.ActionInterval.prototype.initWithDuration.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">t</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2228</span> </span><span class="WHIT">            </span><span class="NAME">this._toConfig</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">c</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2229</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2230</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>2231</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2232</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2233</span> 
<span class='line'>2234</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>2235</span>      * returns a new clone of the action
<span class='line'>2236</span>      * @returns {cc.BezierTo}
<span class='line'>2237</span>      */</span><span class="WHIT">
<span class='line'>2238</span> </span><span class="WHIT">    </span><span class="NAME">clone</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2239</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.BezierTo</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2240</span> </span><span class="WHIT">        </span><span class="NAME">this._cloneDecoration</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2241</span> </span><span class="WHIT">        </span><span class="NAME">action.initWithDuration</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._toConfig</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2242</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2243</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2244</span> 
<span class='line'>2245</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>2246</span>      * Start the action with target.
<span class='line'>2247</span>      * @param {cc.Node} target
<span class='line'>2248</span>      */</span><span class="WHIT">
<span class='line'>2249</span> </span><span class="WHIT">    </span><span class="NAME">startWithTarget</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">target</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2250</span> </span><span class="WHIT">        </span><span class="NAME">cc.BezierBy.prototype.startWithTarget.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">target</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2251</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locStartPos</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._startPosition</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2252</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locToConfig</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._toConfig</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2253</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locConfig</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._config</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2254</span> 
<span class='line'>2255</span> </span><span class="WHIT">        </span><span class="NAME">locConfig</span><span class="PUNC">[</span><span class="NUMB">0</span><span class="PUNC">]</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.pSub</span><span class="PUNC">(</span><span class="NAME">locToConfig</span><span class="PUNC">[</span><span class="NUMB">0</span><span class="PUNC">]</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">locStartPos</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2256</span> </span><span class="WHIT">        </span><span class="NAME">locConfig</span><span class="PUNC">[</span><span class="NUMB">1</span><span class="PUNC">]</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.pSub</span><span class="PUNC">(</span><span class="NAME">locToConfig</span><span class="PUNC">[</span><span class="NUMB">1</span><span class="PUNC">]</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">locStartPos</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2257</span> </span><span class="WHIT">        </span><span class="NAME">locConfig</span><span class="PUNC">[</span><span class="NUMB">2</span><span class="PUNC">]</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.pSub</span><span class="PUNC">(</span><span class="NAME">locToConfig</span><span class="PUNC">[</span><span class="NUMB">2</span><span class="PUNC">]</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">locStartPos</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2258</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>2259</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2260</span> </span><span class="COMM">/**
<span class='line'>2261</span>  * An action that moves the target with a cubic Bezier curve to a destination point.
<span class='line'>2262</span>  * @function
<span class='line'>2263</span>  * @param {Number} t
<span class='line'>2264</span>  * @param {Array} c array of points
<span class='line'>2265</span>  * @return {cc.BezierTo}
<span class='line'>2266</span>  * @example
<span class='line'>2267</span>  * // example
<span class='line'>2268</span>  * var bezier = [cc.p(0, windowSize.height / 2), cc.p(300, -windowSize.height / 2), cc.p(300, 100)];
<span class='line'>2269</span>  * var bezierTo = cc.bezierTo(2, bezier);
<span class='line'>2270</span>  */</span><span class="WHIT">
<span class='line'>2271</span> </span><span class="NAME">cc.bezierTo</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">c</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2272</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.BezierTo</span><span class="PUNC">(</span><span class="NAME">t</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">c</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2273</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2274</span> </span><span class="COMM">/**
<span class='line'>2275</span>  * Please use cc.bezierTo instead
<span class='line'>2276</span>  * @static
<span class='line'>2277</span>  * @deprecated since v3.0 please use cc.bezierTo instead.
<span class='line'>2278</span>  * @param {Number} t
<span class='line'>2279</span>  * @param {Array} c array of points
<span class='line'>2280</span>  * @return {cc.BezierTo}
<span class='line'>2281</span>  */</span><span class="WHIT">
<span class='line'>2282</span> </span><span class="NAME">cc.BezierTo.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.bezierTo</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2283</span> 
<span class='line'>2284</span> 
<span class='line'>2285</span> </span><span class="COMM">/** Scales a cc.Node object to a zoom factor by modifying it's scale attribute.
<span class='line'>2286</span>  * @warning This action doesn't support "reverse"
<span class='line'>2287</span>  * @class
<span class='line'>2288</span>  * @extends cc.ActionInterval
<span class='line'>2289</span>  * @param {Number} duration
<span class='line'>2290</span>  * @param {Number} sx  scale parameter in X
<span class='line'>2291</span>  * @param {Number} [sy] scale parameter in Y, if Null equal to sx
<span class='line'>2292</span>  * @example
<span class='line'>2293</span>  * // It scales to 0.5 in both X and Y.
<span class='line'>2294</span>  * var actionTo = new cc.ScaleTo(2, 0.5);
<span class='line'>2295</span>  *
<span class='line'>2296</span>  * // It scales to 0.5 in x and 2 in Y
<span class='line'>2297</span>  * var actionTo = new cc.ScaleTo(2, 0.5, 2);
<span class='line'>2298</span>  */</span><span class="WHIT">
<span class='line'>2299</span> </span><span class="NAME">cc.ScaleTo</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.ActionInterval.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.ScaleTo# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2300</span> </span><span class="WHIT">    </span><span class="NAME">_scaleX</span><span class="PUNC">:</span><span class="NUMB">1</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2301</span> </span><span class="WHIT">    </span><span class="NAME">_scaleY</span><span class="PUNC">:</span><span class="NUMB">1</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2302</span> </span><span class="WHIT">    </span><span class="NAME">_startScaleX</span><span class="PUNC">:</span><span class="NUMB">1</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2303</span> </span><span class="WHIT">    </span><span class="NAME">_startScaleY</span><span class="PUNC">:</span><span class="NUMB">1</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2304</span> </span><span class="WHIT">    </span><span class="NAME">_endScaleX</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2305</span> </span><span class="WHIT">    </span><span class="NAME">_endScaleY</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2306</span> </span><span class="WHIT">    </span><span class="NAME">_deltaX</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2307</span> </span><span class="WHIT">    </span><span class="NAME">_deltaY</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2308</span> 
<span class='line'>2309</span> </span><span class="WHIT">	</span><span class="COMM">/**
<span class='line'>2310</span>      * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
<span class='line'>2311</span> 	 * @param {Number} duration
<span class='line'>2312</span> 	 * @param {Number} sx  scale parameter in X
<span class='line'>2313</span> 	 * @param {Number} [sy] scale parameter in Y, if Null equal to sx
<span class='line'>2314</span> 	 */</span><span class="WHIT">
<span class='line'>2315</span> </span><span class="WHIT">    </span><span class="NAME">ctor</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">sx</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">sy</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2316</span> </span><span class="WHIT">        </span><span class="NAME">cc.ActionInterval.prototype.ctor.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2317</span> </span><span class="WHIT">		</span><span class="NAME">sx</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="NAME">undefined</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">this.initWithDuration</span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">sx</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">sy</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2318</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2319</span> 
<span class='line'>2320</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>2321</span>      * Initializes the action.
<span class='line'>2322</span>      * @param {Number} duration
<span class='line'>2323</span>      * @param {Number} sx
<span class='line'>2324</span>      * @param {Number} [sy=]
<span class='line'>2325</span>      * @return {Boolean}
<span class='line'>2326</span>      */</span><span class="WHIT">
<span class='line'>2327</span> </span><span class="WHIT">    </span><span class="NAME">initWithDuration</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">sx</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">sy</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT"> </span><span class="COMM">//function overload here</span><span class="WHIT">
<span class='line'>2328</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">cc.ActionInterval.prototype.initWithDuration.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">duration</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2329</span> </span><span class="WHIT">            </span><span class="NAME">this._endScaleX</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">sx</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2330</span> </span><span class="WHIT">            </span><span class="NAME">this._endScaleY</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">sy</span><span class="WHIT"> </span><span class="PUNC">!=</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">?</span><span class="WHIT"> </span><span class="NAME">sy</span><span class="WHIT"> </span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NAME">sx</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2331</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2332</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>2333</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2334</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2335</span> 
<span class='line'>2336</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>2337</span>      * returns a new clone of the action
<span class='line'>2338</span>      * @returns {cc.ScaleTo}
<span class='line'>2339</span>      */</span><span class="WHIT">
<span class='line'>2340</span> </span><span class="WHIT">    </span><span class="NAME">clone</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2341</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.ScaleTo</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2342</span> </span><span class="WHIT">        </span><span class="NAME">this._cloneDecoration</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2343</span> </span><span class="WHIT">        </span><span class="NAME">action.initWithDuration</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._endScaleX</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._endScaleY</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2344</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2345</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2346</span> 
<span class='line'>2347</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>2348</span>      * Start the action with target.
<span class='line'>2349</span>      * @param {cc.Node} target
<span class='line'>2350</span>      */</span><span class="WHIT">
<span class='line'>2351</span> </span><span class="WHIT">    </span><span class="NAME">startWithTarget</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">target</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2352</span> </span><span class="WHIT">        </span><span class="NAME">cc.ActionInterval.prototype.startWithTarget.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">target</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2353</span> </span><span class="WHIT">        </span><span class="NAME">this._startScaleX</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">target.scaleX</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2354</span> </span><span class="WHIT">        </span><span class="NAME">this._startScaleY</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">target.scaleY</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2355</span> </span><span class="WHIT">        </span><span class="NAME">this._deltaX</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._endScaleX</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">this._startScaleX</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2356</span> </span><span class="WHIT">        </span><span class="NAME">this._deltaY</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._endScaleY</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">this._startScaleY</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2357</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2358</span> 
<span class='line'>2359</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>2360</span>      * Called once per frame. Time is the number of seconds of a frame interval.
<span class='line'>2361</span>      * @param {Number} dt
<span class='line'>2362</span>      */</span><span class="WHIT">
<span class='line'>2363</span> </span><span class="WHIT">    </span><span class="NAME">update</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2364</span> </span><span class="WHIT">        </span><span class="NAME">dt</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._computeEaseTime</span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2365</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this.target</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2366</span> </span><span class="WHIT">            </span><span class="NAME">this.target.scaleX</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._startScaleX</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NAME">this._deltaX</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">dt</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2367</span> </span><span class="WHIT">	        </span><span class="NAME">this.target.scaleY</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._startScaleY</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NAME">this._deltaY</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">dt</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2368</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>2369</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>2370</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2371</span> </span><span class="COMM">/**
<span class='line'>2372</span>  * Scales a cc.Node object to a zoom factor by modifying it's scale attribute.
<span class='line'>2373</span>  * @function
<span class='line'>2374</span>  * @param {Number} duration
<span class='line'>2375</span>  * @param {Number} sx  scale parameter in X
<span class='line'>2376</span>  * @param {Number} [sy] scale parameter in Y, if Null equal to sx
<span class='line'>2377</span>  * @return {cc.ScaleTo}
<span class='line'>2378</span>  * @example
<span class='line'>2379</span>  * // example
<span class='line'>2380</span>  * // It scales to 0.5 in both X and Y.
<span class='line'>2381</span>  * var actionTo = cc.scaleTo(2, 0.5);
<span class='line'>2382</span>  *
<span class='line'>2383</span>  * // It scales to 0.5 in x and 2 in Y
<span class='line'>2384</span>  * var actionTo = cc.scaleTo(2, 0.5, 2);
<span class='line'>2385</span>  */</span><span class="WHIT">
<span class='line'>2386</span> </span><span class="NAME">cc.scaleTo</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">sx</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">sy</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT"> </span><span class="COMM">//function overload</span><span class="WHIT">
<span class='line'>2387</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.ScaleTo</span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">sx</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">sy</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2388</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2389</span> </span><span class="COMM">/**
<span class='line'>2390</span>  * Please use cc.scaleTo instead.
<span class='line'>2391</span>  * Scales a cc.Node object to a zoom factor by modifying it's scale attribute.
<span class='line'>2392</span>  * @static
<span class='line'>2393</span>  * @deprecated since v3.0 please use cc.scaleTo instead.
<span class='line'>2394</span>  * @param {Number} duration
<span class='line'>2395</span>  * @param {Number} sx  scale parameter in X
<span class='line'>2396</span>  * @param {Number} [sy] scale parameter in Y, if Null equal to sx
<span class='line'>2397</span>  * @return {cc.ScaleTo}
<span class='line'>2398</span>  */</span><span class="WHIT">
<span class='line'>2399</span> </span><span class="NAME">cc.ScaleTo.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.scaleTo</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2400</span> 
<span class='line'>2401</span> 
<span class='line'>2402</span> </span><span class="COMM">/** Scales a cc.Node object a zoom factor by modifying it's scale attribute.
<span class='line'>2403</span>  * Relative to its changes.
<span class='line'>2404</span>  * @class
<span class='line'>2405</span>  * @extends cc.ScaleTo
<span class='line'>2406</span>  */</span><span class="WHIT">
<span class='line'>2407</span> </span><span class="NAME">cc.ScaleBy</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.ScaleTo.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.ScaleBy# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2408</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>2409</span>      * Start the action with target.
<span class='line'>2410</span>      * @param {cc.Node} target
<span class='line'>2411</span>      */</span><span class="WHIT">
<span class='line'>2412</span> </span><span class="WHIT">    </span><span class="NAME">startWithTarget</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">target</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2413</span> </span><span class="WHIT">        </span><span class="NAME">cc.ScaleTo.prototype.startWithTarget.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">target</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2414</span> </span><span class="WHIT">        </span><span class="NAME">this._deltaX</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._startScaleX</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">this._endScaleX</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">this._startScaleX</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2415</span> </span><span class="WHIT">        </span><span class="NAME">this._deltaY</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._startScaleY</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">this._endScaleY</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">this._startScaleY</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2416</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2417</span> 
<span class='line'>2418</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>2419</span>      * Returns a reversed action.
<span class='line'>2420</span>      * @return {cc.ScaleBy}
<span class='line'>2421</span>      */</span><span class="WHIT">
<span class='line'>2422</span> </span><span class="WHIT">    </span><span class="NAME">reverse</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2423</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.ScaleBy</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NAME">this._endScaleX</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NAME">this._endScaleY</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2424</span> </span><span class="WHIT">        </span><span class="NAME">this._cloneDecoration</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2425</span> </span><span class="WHIT">        </span><span class="NAME">this._reverseEaseList</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2426</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2427</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2428</span> 
<span class='line'>2429</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>2430</span>      * returns a new clone of the action
<span class='line'>2431</span>      * @returns {cc.ScaleBy}
<span class='line'>2432</span>      */</span><span class="WHIT">
<span class='line'>2433</span> </span><span class="WHIT">    </span><span class="NAME">clone</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2434</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.ScaleBy</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2435</span> </span><span class="WHIT">        </span><span class="NAME">this._cloneDecoration</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2436</span> </span><span class="WHIT">        </span><span class="NAME">action.initWithDuration</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._endScaleX</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._endScaleY</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2437</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2438</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>2439</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2440</span> </span><span class="COMM">/**
<span class='line'>2441</span>  * Scales a cc.Node object a zoom factor by modifying it's scale attribute.
<span class='line'>2442</span>  * Relative to its changes.
<span class='line'>2443</span>  * @function
<span class='line'>2444</span>  * @param {Number} duration duration in seconds
<span class='line'>2445</span>  * @param {Number} sx sx  scale parameter in X
<span class='line'>2446</span>  * @param {Number|Null} [sy=] sy scale parameter in Y, if Null equal to sx
<span class='line'>2447</span>  * @return {cc.ScaleBy}
<span class='line'>2448</span>  * @example
<span class='line'>2449</span>  * // example without sy, it scales by 2 both in X and Y
<span class='line'>2450</span>  * var actionBy = cc.scaleBy(2, 2);
<span class='line'>2451</span>  *
<span class='line'>2452</span>  * //example with sy, it scales by 0.25 in X and 4.5 in Y
<span class='line'>2453</span>  * var actionBy2 = cc.scaleBy(2, 0.25, 4.5);
<span class='line'>2454</span>  */</span><span class="WHIT">
<span class='line'>2455</span> </span><span class="NAME">cc.scaleBy</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">sx</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">sy</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2456</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.ScaleBy</span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">sx</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">sy</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2457</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2458</span> </span><span class="COMM">/**
<span class='line'>2459</span>  * Please use cc.scaleBy instead.
<span class='line'>2460</span>  * Scales a cc.Node object a zoom factor by modifying it's scale attribute.
<span class='line'>2461</span>  * Relative to its changes.
<span class='line'>2462</span>  * @static
<span class='line'>2463</span>  * @deprecated since v3.0 please use cc.scaleBy() instead.
<span class='line'>2464</span>  * @param {Number} duration duration in seconds
<span class='line'>2465</span>  * @param {Number} sx sx  scale parameter in X
<span class='line'>2466</span>  * @param {Number|Null} [sy=] sy scale parameter in Y, if Null equal to sx
<span class='line'>2467</span>  * @return {cc.ScaleBy}
<span class='line'>2468</span>  */</span><span class="WHIT">
<span class='line'>2469</span> </span><span class="NAME">cc.ScaleBy.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.scaleBy</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2470</span> 
<span class='line'>2471</span> </span><span class="COMM">/** Blinks a cc.Node object by modifying it's visible attribute
<span class='line'>2472</span>  * @class
<span class='line'>2473</span>  * @extends cc.ActionInterval
<span class='line'>2474</span>  * @param {Number} duration  duration in seconds
<span class='line'>2475</span>  * @param {Number} blinks  blinks in times
<span class='line'>2476</span>  * @example
<span class='line'>2477</span>  * var action = new cc.Blink(2, 10);
<span class='line'>2478</span>  */</span><span class="WHIT">
<span class='line'>2479</span> </span><span class="NAME">cc.Blink</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.ActionInterval.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.Blink# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2480</span> </span><span class="WHIT">    </span><span class="NAME">_times</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2481</span> </span><span class="WHIT">    </span><span class="NAME">_originalState</span><span class="PUNC">:</span><span class="KEYW">false</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2482</span> 
<span class='line'>2483</span> </span><span class="WHIT">	</span><span class="COMM">/**
<span class='line'>2484</span>      * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
<span class='line'>2485</span>      * @param {Number} duration  duration in seconds
<span class='line'>2486</span> 	 * @param {Number} blinks  blinks in times
<span class='line'>2487</span> 	 */</span><span class="WHIT">
<span class='line'>2488</span> </span><span class="WHIT">    </span><span class="NAME">ctor</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">blinks</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2489</span> </span><span class="WHIT">        </span><span class="NAME">cc.ActionInterval.prototype.ctor.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2490</span> </span><span class="WHIT">		</span><span class="NAME">blinks</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="NAME">undefined</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">this.initWithDuration</span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">blinks</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2491</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2492</span> 
<span class='line'>2493</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>2494</span>      * Initializes the action.
<span class='line'>2495</span>      * @param {Number} duration duration in seconds
<span class='line'>2496</span>      * @param {Number} blinks blinks in times
<span class='line'>2497</span>      * @return {Boolean}
<span class='line'>2498</span>      */</span><span class="WHIT">
<span class='line'>2499</span> </span><span class="WHIT">    </span><span class="NAME">initWithDuration</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">blinks</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2500</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">cc.ActionInterval.prototype.initWithDuration.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">duration</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2501</span> </span><span class="WHIT">            </span><span class="NAME">this._times</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">blinks</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2502</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2503</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>2504</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2505</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2506</span> 
<span class='line'>2507</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>2508</span>      * returns a new clone of the action
<span class='line'>2509</span>      * @returns {cc.Blink}
<span class='line'>2510</span>      */</span><span class="WHIT">
<span class='line'>2511</span> </span><span class="WHIT">    </span><span class="NAME">clone</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2512</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.Blink</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2513</span> </span><span class="WHIT">        </span><span class="NAME">this._cloneDecoration</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2514</span> </span><span class="WHIT">        </span><span class="NAME">action.initWithDuration</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._times</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2515</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2516</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2517</span> 
<span class='line'>2518</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>2519</span>      * Called once per frame. Time is the number of seconds of a frame interval.
<span class='line'>2520</span>      * @param {Number} dt time in seconds
<span class='line'>2521</span>      */</span><span class="WHIT">
<span class='line'>2522</span> </span><span class="WHIT">    </span><span class="NAME">update</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2523</span> </span><span class="WHIT">        </span><span class="NAME">dt</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._computeEaseTime</span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2524</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this.target</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="PUNC">!</span><span class="NAME">this.isDone</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2525</span> </span><span class="WHIT">            </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">slice</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">1.0</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NAME">this._times</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2526</span> </span><span class="WHIT">            </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">m</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">dt</span><span class="WHIT"> </span><span class="PUNC">%</span><span class="WHIT"> </span><span class="NAME">slice</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2527</span> </span><span class="WHIT">            </span><span class="NAME">this.target.visible</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">m</span><span class="WHIT"> </span><span class="PUNC">></span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">slice</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2528</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>2529</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2530</span> 
<span class='line'>2531</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>2532</span>      * Start the action with target.
<span class='line'>2533</span>      * @param {cc.Node} target
<span class='line'>2534</span>      */</span><span class="WHIT">
<span class='line'>2535</span> </span><span class="WHIT">    </span><span class="NAME">startWithTarget</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">target</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2536</span> </span><span class="WHIT">        </span><span class="NAME">cc.ActionInterval.prototype.startWithTarget.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">target</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2537</span> </span><span class="WHIT">        </span><span class="NAME">this._originalState</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">target.visible</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2538</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2539</span> 
<span class='line'>2540</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>2541</span>      * stop the action
<span class='line'>2542</span>      */</span><span class="WHIT">
<span class='line'>2543</span> </span><span class="WHIT">    </span><span class="NAME">stop</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2544</span> </span><span class="WHIT">        </span><span class="NAME">this.target.visible</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._originalState</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2545</span> </span><span class="WHIT">        </span><span class="NAME">cc.ActionInterval.prototype.stop.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2546</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2547</span> 
<span class='line'>2548</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>2549</span>      * Returns a reversed action.
<span class='line'>2550</span>      * @return {cc.Blink}
<span class='line'>2551</span>      */</span><span class="WHIT">
<span class='line'>2552</span> </span><span class="WHIT">    </span><span class="NAME">reverse</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2553</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.Blink</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._times</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2554</span> </span><span class="WHIT">        </span><span class="NAME">this._cloneDecoration</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2555</span> </span><span class="WHIT">        </span><span class="NAME">this._reverseEaseList</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2556</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2557</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>2558</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2559</span> </span><span class="COMM">/**
<span class='line'>2560</span>  * Blinks a cc.Node object by modifying it's visible attribute.
<span class='line'>2561</span>  * @function
<span class='line'>2562</span>  * @param {Number} duration  duration in seconds
<span class='line'>2563</span>  * @param blinks blinks in times
<span class='line'>2564</span>  * @return {cc.Blink}
<span class='line'>2565</span>  * @example
<span class='line'>2566</span>  * // example
<span class='line'>2567</span>  * var action = cc.blink(2, 10);
<span class='line'>2568</span>  */</span><span class="WHIT">
<span class='line'>2569</span> </span><span class="NAME">cc.blink</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">blinks</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2570</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.Blink</span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">blinks</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2571</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2572</span> </span><span class="COMM">/**
<span class='line'>2573</span>  * Please use cc.blink instead.
<span class='line'>2574</span>  * Blinks a cc.Node object by modifying it's visible attribute.
<span class='line'>2575</span>  * @static
<span class='line'>2576</span>  * @deprecated since v3.0 please use cc.blink instead.
<span class='line'>2577</span>  * @param {Number} duration  duration in seconds
<span class='line'>2578</span>  * @param blinks blinks in times
<span class='line'>2579</span>  * @return {cc.Blink}
<span class='line'>2580</span>  */</span><span class="WHIT">
<span class='line'>2581</span> </span><span class="NAME">cc.Blink.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.blink</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2582</span> 
<span class='line'>2583</span> </span><span class="COMM">/** Fades an object that implements the cc.RGBAProtocol protocol. It modifies the opacity from the current value to a custom one.
<span class='line'>2584</span>  * @warning This action doesn't support "reverse"
<span class='line'>2585</span>  * @class
<span class='line'>2586</span>  * @extends cc.ActionInterval
<span class='line'>2587</span>  * @param {Number} duration
<span class='line'>2588</span>  * @param {Number} opacity 0-255, 0 is transparent
<span class='line'>2589</span>  * @example
<span class='line'>2590</span>  * var action = new cc.FadeTo(1.0, 0);
<span class='line'>2591</span>  */</span><span class="WHIT">
<span class='line'>2592</span> </span><span class="NAME">cc.FadeTo</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.ActionInterval.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.FadeTo# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2593</span> </span><span class="WHIT">    </span><span class="NAME">_toOpacity</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2594</span> </span><span class="WHIT">    </span><span class="NAME">_fromOpacity</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2595</span> 
<span class='line'>2596</span> </span><span class="WHIT">	</span><span class="COMM">/**
<span class='line'>2597</span>      * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
<span class='line'>2598</span> 	 * @param {Number} duration
<span class='line'>2599</span> 	 * @param {Number} opacity 0-255, 0 is transparent
<span class='line'>2600</span> 	 */</span><span class="WHIT">
<span class='line'>2601</span> </span><span class="WHIT">    </span><span class="NAME">ctor</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">opacity</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2602</span> </span><span class="WHIT">        </span><span class="NAME">cc.ActionInterval.prototype.ctor.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2603</span> </span><span class="WHIT">		</span><span class="NAME">opacity</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="NAME">undefined</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">this.initWithDuration</span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">opacity</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2604</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2605</span> 
<span class='line'>2606</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>2607</span>      * Initializes the action.
<span class='line'>2608</span>      * @param {Number} duration  duration in seconds
<span class='line'>2609</span>      * @param {Number} opacity
<span class='line'>2610</span>      * @return {Boolean}
<span class='line'>2611</span>      */</span><span class="WHIT">
<span class='line'>2612</span> </span><span class="WHIT">    </span><span class="NAME">initWithDuration</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">opacity</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2613</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">cc.ActionInterval.prototype.initWithDuration.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">duration</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2614</span> </span><span class="WHIT">            </span><span class="NAME">this._toOpacity</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">opacity</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2615</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2616</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>2617</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2618</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2619</span> 
<span class='line'>2620</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>2621</span>      * returns a new clone of the action
<span class='line'>2622</span>      * @returns {cc.FadeTo}
<span class='line'>2623</span>      */</span><span class="WHIT">
<span class='line'>2624</span> </span><span class="WHIT">    </span><span class="NAME">clone</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2625</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.FadeTo</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2626</span> </span><span class="WHIT">        </span><span class="NAME">this._cloneDecoration</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2627</span> </span><span class="WHIT">        </span><span class="NAME">action.initWithDuration</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._toOpacity</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2628</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2629</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2630</span> 
<span class='line'>2631</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>2632</span>      * Called once per frame. Time is the number of seconds of a frame interval.
<span class='line'>2633</span>      * @param {Number} time time in seconds
<span class='line'>2634</span>      */</span><span class="WHIT">
<span class='line'>2635</span> </span><span class="WHIT">    </span><span class="NAME">update</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">time</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2636</span> </span><span class="WHIT">        </span><span class="NAME">time</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._computeEaseTime</span><span class="PUNC">(</span><span class="NAME">time</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2637</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">fromOpacity</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._fromOpacity</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="NAME">undefined</span><span class="WHIT"> </span><span class="PUNC">?</span><span class="WHIT"> </span><span class="NAME">this._fromOpacity</span><span class="WHIT"> </span><span class="PUNC">:</span><span class="WHIT"> </span><span class="NUMB">255</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2638</span> </span><span class="WHIT">        </span><span class="NAME">this.target.opacity</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">fromOpacity</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this._toOpacity</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">fromOpacity</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">time</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2639</span> 
<span class='line'>2640</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2641</span> 
<span class='line'>2642</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>2643</span>      * Start this action with target.
<span class='line'>2644</span>      * @param {cc.Node} target
<span class='line'>2645</span>      */</span><span class="WHIT">
<span class='line'>2646</span> </span><span class="WHIT">    </span><span class="NAME">startWithTarget</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">target</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2647</span> </span><span class="WHIT">        </span><span class="NAME">cc.ActionInterval.prototype.startWithTarget.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">target</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2648</span> </span><span class="WHIT">        </span><span class="NAME">this._fromOpacity</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">target.opacity</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2649</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>2650</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2651</span> 
<span class='line'>2652</span> </span><span class="COMM">/**
<span class='line'>2653</span>  * Fades an object that implements the cc.RGBAProtocol protocol. It modifies the opacity from the current value to a custom one.
<span class='line'>2654</span>  * @function
<span class='line'>2655</span>  * @param {Number} duration
<span class='line'>2656</span>  * @param {Number} opacity 0-255, 0 is transparent
<span class='line'>2657</span>  * @return {cc.FadeTo}
<span class='line'>2658</span>  * @example
<span class='line'>2659</span>  * // example
<span class='line'>2660</span>  * var action = cc.fadeTo(1.0, 0);
<span class='line'>2661</span>  */</span><span class="WHIT">
<span class='line'>2662</span> </span><span class="NAME">cc.fadeTo</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">opacity</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2663</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.FadeTo</span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">opacity</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2664</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2665</span> </span><span class="COMM">/**
<span class='line'>2666</span>  * Please use cc.fadeTo instead.
<span class='line'>2667</span>  * Fades an object that implements the cc.RGBAProtocol protocol. It modifies the opacity from the current value to a custom one.
<span class='line'>2668</span>  * @static
<span class='line'>2669</span>  * @deprecated since v3.0 please use cc.fadeTo instead.
<span class='line'>2670</span>  * @param {Number} duration
<span class='line'>2671</span>  * @param {Number} opacity 0-255, 0 is transparent
<span class='line'>2672</span>  * @return {cc.FadeTo}
<span class='line'>2673</span>  */</span><span class="WHIT">
<span class='line'>2674</span> </span><span class="NAME">cc.FadeTo.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.fadeTo</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2675</span> 
<span class='line'>2676</span> </span><span class="COMM">/** Fades In an object that implements the cc.RGBAProtocol protocol. It modifies the opacity from 0 to 255.&lt;br/>
<span class='line'>2677</span>  * The "reverse" of this action is FadeOut
<span class='line'>2678</span>  * @class
<span class='line'>2679</span>  * @extends cc.FadeTo
<span class='line'>2680</span>  * @param {Number} duration duration in seconds
<span class='line'>2681</span>  */</span><span class="WHIT">
<span class='line'>2682</span> </span><span class="NAME">cc.FadeIn</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.FadeTo.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.FadeIn# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2683</span> </span><span class="WHIT">    </span><span class="NAME">_reverseAction</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2684</span> 
<span class='line'>2685</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>2686</span>      * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
<span class='line'>2687</span>      * @param {Number} duration duration in seconds
<span class='line'>2688</span>      */</span><span class="WHIT">
<span class='line'>2689</span> </span><span class="WHIT">    </span><span class="NAME">ctor</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2690</span> </span><span class="WHIT">        </span><span class="NAME">cc.FadeTo.prototype.ctor.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2691</span> </span><span class="WHIT">        </span><span class="NAME">duration</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">this.initWithDuration</span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">255</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2692</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2693</span> 
<span class='line'>2694</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>2695</span>      * Returns a reversed action.
<span class='line'>2696</span>      * @return {cc.FadeOut}
<span class='line'>2697</span>      */</span><span class="WHIT">
<span class='line'>2698</span> </span><span class="WHIT">    </span><span class="NAME">reverse</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2699</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.FadeOut</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2700</span> </span><span class="WHIT">        </span><span class="NAME">action.initWithDuration</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2701</span> </span><span class="WHIT">        </span><span class="NAME">this._cloneDecoration</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2702</span> </span><span class="WHIT">        </span><span class="NAME">this._reverseEaseList</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2703</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2704</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2705</span> 
<span class='line'>2706</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>2707</span>      * returns a new clone of the action
<span class='line'>2708</span>      * @returns {cc.FadeIn}
<span class='line'>2709</span>      */</span><span class="WHIT">
<span class='line'>2710</span> </span><span class="WHIT">    </span><span class="NAME">clone</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2711</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.FadeIn</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2712</span> </span><span class="WHIT">        </span><span class="NAME">this._cloneDecoration</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2713</span> </span><span class="WHIT">        </span><span class="NAME">action.initWithDuration</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._toOpacity</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2714</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2715</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2716</span> 
<span class='line'>2717</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>2718</span>      * Start the action with target.
<span class='line'>2719</span>      * @param {cc.Node} target
<span class='line'>2720</span>      */</span><span class="WHIT">
<span class='line'>2721</span> </span><span class="WHIT">    </span><span class="NAME">startWithTarget</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">target</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2722</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="NAME">this._reverseAction</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>2723</span> </span><span class="WHIT">            </span><span class="NAME">this._toOpacity</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._reverseAction._fromOpacity</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2724</span> </span><span class="WHIT">        </span><span class="NAME">cc.FadeTo.prototype.startWithTarget.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">target</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2725</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>2726</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2727</span> 
<span class='line'>2728</span> </span><span class="COMM">/**
<span class='line'>2729</span>  * Fades In an object that implements the cc.RGBAProtocol protocol. It modifies the opacity from 0 to 255.
<span class='line'>2730</span>  * @function
<span class='line'>2731</span>  * @param {Number} duration duration in seconds
<span class='line'>2732</span>  * @return {cc.FadeIn}
<span class='line'>2733</span>  * @example
<span class='line'>2734</span>  * //example
<span class='line'>2735</span>  * var action = cc.fadeIn(1.0);
<span class='line'>2736</span>  */</span><span class="WHIT">
<span class='line'>2737</span> </span><span class="NAME">cc.fadeIn</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2738</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.FadeIn</span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2739</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2740</span> </span><span class="COMM">/**
<span class='line'>2741</span>  * Please use cc.fadeIn instead.
<span class='line'>2742</span>  * Fades In an object that implements the cc.RGBAProtocol protocol. It modifies the opacity from 0 to 255.
<span class='line'>2743</span>  * @static
<span class='line'>2744</span>  * @deprecated since v3.0 please use cc.fadeIn() instead.
<span class='line'>2745</span>  * @param {Number} duration duration in seconds
<span class='line'>2746</span>  * @return {cc.FadeIn}
<span class='line'>2747</span>  */</span><span class="WHIT">
<span class='line'>2748</span> </span><span class="NAME">cc.FadeIn.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.fadeIn</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2749</span> 
<span class='line'>2750</span> 
<span class='line'>2751</span> </span><span class="COMM">/** Fades Out an object that implements the cc.RGBAProtocol protocol. It modifies the opacity from 255 to 0.
<span class='line'>2752</span>  * The "reverse" of this action is FadeIn
<span class='line'>2753</span>  * @class
<span class='line'>2754</span>  * @extends cc.FadeTo
<span class='line'>2755</span>  * @param {Number} duration duration in seconds
<span class='line'>2756</span>  */</span><span class="WHIT">
<span class='line'>2757</span> </span><span class="NAME">cc.FadeOut</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.FadeTo.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.FadeOut# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2758</span> 
<span class='line'>2759</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>2760</span>      * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
<span class='line'>2761</span>      * @param {Number} duration duration in seconds
<span class='line'>2762</span>      */</span><span class="WHIT">
<span class='line'>2763</span> </span><span class="WHIT">    </span><span class="NAME">ctor</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2764</span> </span><span class="WHIT">        </span><span class="NAME">cc.FadeTo.prototype.ctor.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2765</span> </span><span class="WHIT">        </span><span class="NAME">duration</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">this.initWithDuration</span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2766</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2767</span> 
<span class='line'>2768</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>2769</span>      * Returns a reversed action.
<span class='line'>2770</span>      * @return {cc.FadeIn}
<span class='line'>2771</span>      */</span><span class="WHIT">
<span class='line'>2772</span> </span><span class="WHIT">    </span><span class="NAME">reverse</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2773</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.FadeIn</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2774</span> </span><span class="WHIT">        </span><span class="NAME">action._reverseAction</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">this</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2775</span> </span><span class="WHIT">        </span><span class="NAME">action.initWithDuration</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">255</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2776</span> </span><span class="WHIT">        </span><span class="NAME">this._cloneDecoration</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2777</span> </span><span class="WHIT">        </span><span class="NAME">this._reverseEaseList</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2778</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2779</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2780</span> 
<span class='line'>2781</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>2782</span>      * returns a new clone of the action
<span class='line'>2783</span>      * @returns {cc.FadeOut}
<span class='line'>2784</span>      */</span><span class="WHIT">
<span class='line'>2785</span> </span><span class="WHIT">    </span><span class="NAME">clone</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2786</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.FadeOut</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2787</span> </span><span class="WHIT">        </span><span class="NAME">this._cloneDecoration</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2788</span> </span><span class="WHIT">        </span><span class="NAME">action.initWithDuration</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._toOpacity</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2789</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2790</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>2791</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2792</span> 
<span class='line'>2793</span> </span><span class="COMM">/**
<span class='line'>2794</span>  * Fades Out an object that implements the cc.RGBAProtocol protocol. It modifies the opacity from 255 to 0.
<span class='line'>2795</span>  * @function
<span class='line'>2796</span>  * @param {Number} d  duration in seconds
<span class='line'>2797</span>  * @return {cc.FadeOut}
<span class='line'>2798</span>  * @example
<span class='line'>2799</span>  * // example
<span class='line'>2800</span>  * var action = cc.fadeOut(1.0);
<span class='line'>2801</span>  */</span><span class="WHIT">
<span class='line'>2802</span> </span><span class="NAME">cc.fadeOut</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">d</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2803</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.FadeOut</span><span class="PUNC">(</span><span class="NAME">d</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2804</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2805</span> </span><span class="COMM">/**
<span class='line'>2806</span>  * Please use cc.fadeOut instead.
<span class='line'>2807</span>  * Fades Out an object that implements the cc.RGBAProtocol protocol. It modifies the opacity from 255 to 0.
<span class='line'>2808</span>  * @static
<span class='line'>2809</span>  * @deprecated since v3.0 please use cc.fadeOut instead.
<span class='line'>2810</span>  * @param {Number} d  duration in seconds
<span class='line'>2811</span>  * @return {cc.FadeOut}
<span class='line'>2812</span>  */</span><span class="WHIT">
<span class='line'>2813</span> </span><span class="NAME">cc.FadeOut.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.fadeOut</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2814</span> 
<span class='line'>2815</span> </span><span class="COMM">/** Tints a cc.Node that implements the cc.NodeRGB protocol from current tint to a custom one.
<span class='line'>2816</span>  * @warning This action doesn't support "reverse"
<span class='line'>2817</span>  * @class
<span class='line'>2818</span>  * @extends cc.ActionInterval
<span class='line'>2819</span>  * @param {Number} duration
<span class='line'>2820</span>  * @param {Number} red 0-255
<span class='line'>2821</span>  * @param {Number} green  0-255
<span class='line'>2822</span>  * @param {Number} blue 0-255
<span class='line'>2823</span>  * @example
<span class='line'>2824</span>  * var action = new cc.TintTo(2, 255, 0, 255);
<span class='line'>2825</span>  */</span><span class="WHIT">
<span class='line'>2826</span> </span><span class="NAME">cc.TintTo</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.ActionInterval.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.TintTo# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2827</span> </span><span class="WHIT">    </span><span class="NAME">_to</span><span class="PUNC">:</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2828</span> </span><span class="WHIT">    </span><span class="NAME">_from</span><span class="PUNC">:</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2829</span> 
<span class='line'>2830</span> </span><span class="WHIT">	</span><span class="COMM">/**
<span class='line'>2831</span>      * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
<span class='line'>2832</span> 	 * @param {Number} duration
<span class='line'>2833</span> 	 * @param {Number} red 0-255
<span class='line'>2834</span> 	 * @param {Number} green  0-255
<span class='line'>2835</span> 	 * @param {Number} blue 0-255
<span class='line'>2836</span> 	 */</span><span class="WHIT">
<span class='line'>2837</span> </span><span class="WHIT">    </span><span class="NAME">ctor</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">red</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">green</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">blue</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2838</span> </span><span class="WHIT">        </span><span class="NAME">cc.ActionInterval.prototype.ctor.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2839</span> </span><span class="WHIT">        </span><span class="NAME">this._to</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.color</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2840</span> </span><span class="WHIT">        </span><span class="NAME">this._from</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.color</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2841</span> 
<span class='line'>2842</span> </span><span class="WHIT">		</span><span class="NAME">blue</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="NAME">undefined</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">this.initWithDuration</span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">red</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">green</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">blue</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2843</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2844</span> 
<span class='line'>2845</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>2846</span>      * Initializes the action.
<span class='line'>2847</span>      * @param {Number} duration
<span class='line'>2848</span>      * @param {Number} red 0-255
<span class='line'>2849</span>      * @param {Number} green 0-255
<span class='line'>2850</span>      * @param {Number} blue 0-255
<span class='line'>2851</span>      * @return {Boolean}
<span class='line'>2852</span>      */</span><span class="WHIT">
<span class='line'>2853</span> </span><span class="WHIT">    </span><span class="NAME">initWithDuration</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">red</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">green</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">blue</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2854</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">cc.ActionInterval.prototype.initWithDuration.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">duration</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2855</span> </span><span class="WHIT">            </span><span class="NAME">this._to</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.color</span><span class="PUNC">(</span><span class="NAME">red</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">green</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">blue</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2856</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2857</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>2858</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2859</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2860</span> 
<span class='line'>2861</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>2862</span>      * returns a new clone of the action
<span class='line'>2863</span>      * @returns {cc.TintTo}
<span class='line'>2864</span>      */</span><span class="WHIT">
<span class='line'>2865</span> </span><span class="WHIT">    </span><span class="NAME">clone</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2866</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.TintTo</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2867</span> </span><span class="WHIT">        </span><span class="NAME">this._cloneDecoration</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2868</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locTo</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._to</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2869</span> </span><span class="WHIT">        </span><span class="NAME">action.initWithDuration</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">locTo.r</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">locTo.g</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">locTo.b</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2870</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2871</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2872</span> 
<span class='line'>2873</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>2874</span>      * Start the action with target.
<span class='line'>2875</span>      * @param {cc.Node} target
<span class='line'>2876</span>      */</span><span class="WHIT">
<span class='line'>2877</span> </span><span class="WHIT">    </span><span class="NAME">startWithTarget</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">target</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2878</span> </span><span class="WHIT">        </span><span class="NAME">cc.ActionInterval.prototype.startWithTarget.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">target</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2879</span> 
<span class='line'>2880</span> </span><span class="WHIT">        </span><span class="NAME">this._from</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.target.color</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2881</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2882</span> 
<span class='line'>2883</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>2884</span>      * Called once per frame. Time is the number of seconds of a frame interval.
<span class='line'>2885</span>      * @param {Number} dt time in seconds
<span class='line'>2886</span>      */</span><span class="WHIT">
<span class='line'>2887</span> </span><span class="WHIT">    </span><span class="NAME">update</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2888</span> </span><span class="WHIT">        </span><span class="NAME">dt</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._computeEaseTime</span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2889</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locFrom</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._from</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">locTo</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._to</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2890</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">locFrom</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2891</span> </span><span class="WHIT">            </span><span class="NAME">this.target.color</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.color</span><span class="PUNC">(</span><span class="NAME">locFrom.r</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">locTo.r</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">locFrom.r</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">dt</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2892</span> </span><span class="WHIT">                                        </span><span class="NAME">locFrom.g</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">locTo.g</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">locFrom.g</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">dt</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2893</span> </span><span class="WHIT">	                                    </span><span class="NAME">locFrom.b</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">locTo.b</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">locFrom.b</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">dt</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2894</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>2895</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>2896</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2897</span> 
<span class='line'>2898</span> </span><span class="COMM">/**
<span class='line'>2899</span>  * Tints a cc.Node that implements the cc.NodeRGB protocol from current tint to a custom one.
<span class='line'>2900</span>  * @function
<span class='line'>2901</span>  * @param {Number} duration
<span class='line'>2902</span>  * @param {Number} red 0-255
<span class='line'>2903</span>  * @param {Number} green  0-255
<span class='line'>2904</span>  * @param {Number} blue 0-255
<span class='line'>2905</span>  * @return {cc.TintTo}
<span class='line'>2906</span>  * @example
<span class='line'>2907</span>  * // example
<span class='line'>2908</span>  * var action = cc.tintTo(2, 255, 0, 255);
<span class='line'>2909</span>  */</span><span class="WHIT">
<span class='line'>2910</span> </span><span class="NAME">cc.tintTo</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">red</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">green</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">blue</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2911</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.TintTo</span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">red</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">green</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">blue</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2912</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2913</span> </span><span class="COMM">/**
<span class='line'>2914</span>  * Please use cc.tintTo instead.
<span class='line'>2915</span>  * Tints a cc.Node that implements the cc.NodeRGB protocol from current tint to a custom one.
<span class='line'>2916</span>  * @static
<span class='line'>2917</span>  * @deprecated since v3.0 please use cc.tintTo instead.
<span class='line'>2918</span>  * @param {Number} duration
<span class='line'>2919</span>  * @param {Number} red 0-255
<span class='line'>2920</span>  * @param {Number} green  0-255
<span class='line'>2921</span>  * @param {Number} blue 0-255
<span class='line'>2922</span>  * @return {cc.TintTo}
<span class='line'>2923</span>  */</span><span class="WHIT">
<span class='line'>2924</span> </span><span class="NAME">cc.TintTo.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.tintTo</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2925</span> 
<span class='line'>2926</span> 
<span class='line'>2927</span> </span><span class="COMM">/**  Tints a cc.Node that implements the cc.NodeRGB protocol from current tint to a custom one.
<span class='line'>2928</span>  * Relative to their own color change.
<span class='line'>2929</span>  * @class
<span class='line'>2930</span>  * @extends cc.ActionInterval
<span class='line'>2931</span>  * @param {Number} duration  duration in seconds
<span class='line'>2932</span>  * @param {Number} deltaRed
<span class='line'>2933</span>  * @param {Number} deltaGreen
<span class='line'>2934</span>  * @param {Number} deltaBlue
<span class='line'>2935</span>  * @example
<span class='line'>2936</span>  * var action = new cc.TintBy(2, -127, -255, -127);
<span class='line'>2937</span>  */</span><span class="WHIT">
<span class='line'>2938</span> </span><span class="NAME">cc.TintBy</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.ActionInterval.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.TintBy# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2939</span> </span><span class="WHIT">    </span><span class="NAME">_deltaR</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2940</span> </span><span class="WHIT">    </span><span class="NAME">_deltaG</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2941</span> </span><span class="WHIT">    </span><span class="NAME">_deltaB</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2942</span> 
<span class='line'>2943</span> </span><span class="WHIT">    </span><span class="NAME">_fromR</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2944</span> </span><span class="WHIT">    </span><span class="NAME">_fromG</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2945</span> </span><span class="WHIT">    </span><span class="NAME">_fromB</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2946</span> 
<span class='line'>2947</span> </span><span class="WHIT">	</span><span class="COMM">/**
<span class='line'>2948</span>      * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
<span class='line'>2949</span> 	 * @param {Number} duration  duration in seconds
<span class='line'>2950</span> 	 * @param {Number} deltaRed
<span class='line'>2951</span> 	 * @param {Number} deltaGreen
<span class='line'>2952</span> 	 * @param {Number} deltaBlue
<span class='line'>2953</span> 	 */</span><span class="WHIT">
<span class='line'>2954</span> </span><span class="WHIT">    </span><span class="NAME">ctor</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">deltaRed</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">deltaGreen</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">deltaBlue</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2955</span> </span><span class="WHIT">        </span><span class="NAME">cc.ActionInterval.prototype.ctor.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2956</span> </span><span class="WHIT">		</span><span class="NAME">deltaBlue</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="NAME">undefined</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">this.initWithDuration</span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">deltaRed</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">deltaGreen</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">deltaBlue</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2957</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2958</span> 
<span class='line'>2959</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>2960</span>      * Initializes the action.
<span class='line'>2961</span>      * @param {Number} duration
<span class='line'>2962</span>      * @param {Number} deltaRed 0-255
<span class='line'>2963</span>      * @param {Number} deltaGreen 0-255
<span class='line'>2964</span>      * @param {Number} deltaBlue 0-255
<span class='line'>2965</span>      * @return {Boolean}
<span class='line'>2966</span>      */</span><span class="WHIT">
<span class='line'>2967</span> </span><span class="WHIT">    </span><span class="NAME">initWithDuration</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">deltaRed</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">deltaGreen</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">deltaBlue</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2968</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">cc.ActionInterval.prototype.initWithDuration.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">duration</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2969</span> </span><span class="WHIT">            </span><span class="NAME">this._deltaR</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">deltaRed</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2970</span> </span><span class="WHIT">            </span><span class="NAME">this._deltaG</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">deltaGreen</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2971</span> </span><span class="WHIT">            </span><span class="NAME">this._deltaB</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">deltaBlue</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2972</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2973</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>2974</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2975</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2976</span> 
<span class='line'>2977</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>2978</span>      * returns a new clone of the action
<span class='line'>2979</span>      * @returns {cc.TintBy}
<span class='line'>2980</span>      */</span><span class="WHIT">
<span class='line'>2981</span> </span><span class="WHIT">    </span><span class="NAME">clone</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2982</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.TintBy</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2983</span> </span><span class="WHIT">        </span><span class="NAME">this._cloneDecoration</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2984</span> </span><span class="WHIT">        </span><span class="NAME">action.initWithDuration</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._deltaR</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._deltaG</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._deltaB</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2985</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2986</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>2987</span> 
<span class='line'>2988</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>2989</span>      * Start the action with target.
<span class='line'>2990</span>      * @param {cc.Node} target
<span class='line'>2991</span>      */</span><span class="WHIT">
<span class='line'>2992</span> </span><span class="WHIT">    </span><span class="NAME">startWithTarget</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">target</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>2993</span> </span><span class="WHIT">        </span><span class="NAME">cc.ActionInterval.prototype.startWithTarget.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">target</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2994</span> 
<span class='line'>2995</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">color</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">target.color</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2996</span> </span><span class="WHIT">        </span><span class="NAME">this._fromR</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">color.r</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2997</span> </span><span class="WHIT">        </span><span class="NAME">this._fromG</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">color.g</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2998</span> </span><span class="WHIT">        </span><span class="NAME">this._fromB</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">color.b</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>2999</span> 
<span class='line'>3000</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>3001</span> 
<span class='line'>3002</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>3003</span>      * Called once per frame. Time is the number of seconds of a frame interval.
<span class='line'>3004</span>      * @param {Number} dt time in seconds
<span class='line'>3005</span>      */</span><span class="WHIT">
<span class='line'>3006</span> </span><span class="WHIT">    </span><span class="NAME">update</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>3007</span> </span><span class="WHIT">        </span><span class="NAME">dt</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._computeEaseTime</span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3008</span> 
<span class='line'>3009</span> </span><span class="WHIT">        </span><span class="NAME">this.target.color</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.color</span><span class="PUNC">(</span><span class="NAME">this._fromR</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NAME">this._deltaR</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">dt</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>3010</span> </span><span class="WHIT">                                    </span><span class="NAME">this._fromG</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NAME">this._deltaG</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">dt</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>3011</span> </span><span class="WHIT">                                    </span><span class="NAME">this._fromB</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NAME">this._deltaB</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">dt</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3012</span> 
<span class='line'>3013</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>3014</span> 
<span class='line'>3015</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>3016</span>      * Returns a reversed action.
<span class='line'>3017</span>      * @return {cc.TintBy}
<span class='line'>3018</span>      */</span><span class="WHIT">
<span class='line'>3019</span> </span><span class="WHIT">    </span><span class="NAME">reverse</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>3020</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.TintBy</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="NAME">this._deltaR</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="NAME">this._deltaG</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="NAME">this._deltaB</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3021</span> </span><span class="WHIT">        </span><span class="NAME">this._cloneDecoration</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3022</span> </span><span class="WHIT">        </span><span class="NAME">this._reverseEaseList</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3023</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3024</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>3025</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3026</span> 
<span class='line'>3027</span> </span><span class="COMM">/**
<span class='line'>3028</span>  * Tints a cc.Node that implements the cc.NodeRGB protocol from current tint to a custom one.
<span class='line'>3029</span>  * Relative to their own color change.
<span class='line'>3030</span>  * @function
<span class='line'>3031</span>  * @param {Number} duration  duration in seconds
<span class='line'>3032</span>  * @param {Number} deltaRed
<span class='line'>3033</span>  * @param {Number} deltaGreen
<span class='line'>3034</span>  * @param {Number} deltaBlue
<span class='line'>3035</span>  * @return {cc.TintBy}
<span class='line'>3036</span>  * @example
<span class='line'>3037</span>  * // example
<span class='line'>3038</span>  * var action = cc.tintBy(2, -127, -255, -127);
<span class='line'>3039</span>  */</span><span class="WHIT">
<span class='line'>3040</span> </span><span class="NAME">cc.tintBy</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">deltaRed</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">deltaGreen</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">deltaBlue</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>3041</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.TintBy</span><span class="PUNC">(</span><span class="NAME">duration</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">deltaRed</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">deltaGreen</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">deltaBlue</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3042</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3043</span> </span><span class="COMM">/**
<span class='line'>3044</span>  * Please use cc.tintBy instead.
<span class='line'>3045</span>  * Tints a cc.Node that implements the cc.NodeRGB protocol from current tint to a custom one.
<span class='line'>3046</span>  * Relative to their own color change.
<span class='line'>3047</span>  * @static
<span class='line'>3048</span>  * @deprecated since v3.0 please use cc.tintBy instead.
<span class='line'>3049</span>  * @param {Number} duration  duration in seconds
<span class='line'>3050</span>  * @param {Number} deltaRed
<span class='line'>3051</span>  * @param {Number} deltaGreen
<span class='line'>3052</span>  * @param {Number} deltaBlue
<span class='line'>3053</span>  * @return {cc.TintBy}
<span class='line'>3054</span>  */</span><span class="WHIT">
<span class='line'>3055</span> </span><span class="NAME">cc.TintBy.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.tintBy</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3056</span> 
<span class='line'>3057</span> </span><span class="COMM">/** Delays the action a certain amount of seconds
<span class='line'>3058</span>  * @class
<span class='line'>3059</span>  * @extends cc.ActionInterval
<span class='line'>3060</span>  */</span><span class="WHIT">
<span class='line'>3061</span> </span><span class="NAME">cc.DelayTime</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.ActionInterval.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.DelayTime# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>3062</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>3063</span>      * Called once per frame. Time is the number of seconds of a frame interval.
<span class='line'>3064</span>      * Will be overwrite.
<span class='line'>3065</span>      * @param {Number} dt time in seconds
<span class='line'>3066</span>      */</span><span class="WHIT">
<span class='line'>3067</span> </span><span class="WHIT">    </span><span class="NAME">update</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>3068</span> 
<span class='line'>3069</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>3070</span>      * Returns a reversed action.
<span class='line'>3071</span>      * @return {cc.DelayTime}
<span class='line'>3072</span>      */</span><span class="WHIT">
<span class='line'>3073</span> </span><span class="WHIT">    </span><span class="NAME">reverse</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>3074</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.DelayTime</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3075</span> </span><span class="WHIT">        </span><span class="NAME">this._cloneDecoration</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3076</span> </span><span class="WHIT">        </span><span class="NAME">this._reverseEaseList</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3077</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3078</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>3079</span> 
<span class='line'>3080</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>3081</span>      * returns a new clone of the action
<span class='line'>3082</span>      * @returns {cc.DelayTime}
<span class='line'>3083</span>      */</span><span class="WHIT">
<span class='line'>3084</span> </span><span class="WHIT">    </span><span class="NAME">clone</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>3085</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.DelayTime</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3086</span> </span><span class="WHIT">        </span><span class="NAME">this._cloneDecoration</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3087</span> </span><span class="WHIT">        </span><span class="NAME">action.initWithDuration</span><span class="PUNC">(</span><span class="NAME">this._duration</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3088</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3089</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>3090</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3091</span> 
<span class='line'>3092</span> </span><span class="COMM">/**
<span class='line'>3093</span>  * Delays the action a certain amount of seconds
<span class='line'>3094</span>  * @function
<span class='line'>3095</span>  * @param {Number} d duration in seconds
<span class='line'>3096</span>  * @return {cc.DelayTime}
<span class='line'>3097</span>  * @example
<span class='line'>3098</span>  * // example
<span class='line'>3099</span>  * var delay = cc.delayTime(1);
<span class='line'>3100</span>  */</span><span class="WHIT">
<span class='line'>3101</span> </span><span class="NAME">cc.delayTime</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">d</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>3102</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.DelayTime</span><span class="PUNC">(</span><span class="NAME">d</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3103</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3104</span> </span><span class="COMM">/**
<span class='line'>3105</span>  * Please use cc.delayTime instead.
<span class='line'>3106</span>  * Delays the action a certain amount of seconds
<span class='line'>3107</span>  * @static
<span class='line'>3108</span>  * @deprecated since v3.0 please use cc.delaTime instead.
<span class='line'>3109</span>  * @param {Number} d duration in seconds
<span class='line'>3110</span>  * @return {cc.DelayTime}
<span class='line'>3111</span>  */</span><span class="WHIT">
<span class='line'>3112</span> </span><span class="NAME">cc.DelayTime.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.delayTime</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3113</span> 
<span class='line'>3114</span> </span><span class="COMM">/**
<span class='line'>3115</span>  * &lt;p>
<span class='line'>3116</span>  * Executes an action in reverse order, from time=duration to time=0                                     &lt;br/>
<span class='line'>3117</span>  * @warning Use this action carefully. This action is not sequenceable.                                 &lt;br/>
<span class='line'>3118</span>  * Use it as the default "reversed" method of your own actions, but using it outside the "reversed"      &lt;br/>
<span class='line'>3119</span>  * scope is not recommended.
<span class='line'>3120</span>  * &lt;/p>
<span class='line'>3121</span>  * @class
<span class='line'>3122</span>  * @extends cc.ActionInterval
<span class='line'>3123</span>  * @param {cc.FiniteTimeAction} action
<span class='line'>3124</span>  * @example
<span class='line'>3125</span>  *  var reverse = new cc.ReverseTime(this);
<span class='line'>3126</span>  */</span><span class="WHIT">
<span class='line'>3127</span> </span><span class="NAME">cc.ReverseTime</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.ActionInterval.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.ReverseTime# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>3128</span> </span><span class="WHIT">    </span><span class="NAME">_other</span><span class="PUNC">:</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>3129</span> 
<span class='line'>3130</span> </span><span class="WHIT">	</span><span class="COMM">/**
<span class='line'>3131</span>      * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
<span class='line'>3132</span> 	 * @param {cc.FiniteTimeAction} action
<span class='line'>3133</span> 	 */</span><span class="WHIT">
<span class='line'>3134</span> </span><span class="WHIT">    </span><span class="NAME">ctor</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>3135</span> </span><span class="WHIT">        </span><span class="NAME">cc.ActionInterval.prototype.ctor.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3136</span> </span><span class="WHIT">        </span><span class="NAME">this._other</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3137</span> 
<span class='line'>3138</span> </span><span class="WHIT">		</span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">this.initWithAction</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3139</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>3140</span> 
<span class='line'>3141</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>3142</span>      * @param {cc.FiniteTimeAction} action
<span class='line'>3143</span>      * @return {Boolean}
<span class='line'>3144</span>      */</span><span class="WHIT">
<span class='line'>3145</span> </span><span class="WHIT">    </span><span class="NAME">initWithAction</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>3146</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="PUNC">!</span><span class="NAME">action</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>3147</span> </span><span class="WHIT">            </span><span class="KEYW">throw</span><span class="WHIT"> </span><span class="STRN">"cc.ReverseTime.initWithAction(): action must be non null"</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3148</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">==</span><span class="WHIT"> </span><span class="NAME">this._other</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>3149</span> </span><span class="WHIT">            </span><span class="KEYW">throw</span><span class="WHIT"> </span><span class="STRN">"cc.ReverseTime.initWithAction(): the action was already passed in."</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3150</span> 
<span class='line'>3151</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">cc.ActionInterval.prototype.initWithDuration.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">action._duration</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>3152</span> </span><span class="WHIT">            </span><span class="COMM">// Don't leak if action is reused</span><span class="WHIT">
<span class='line'>3153</span> </span><span class="WHIT">            </span><span class="NAME">this._other</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3154</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3155</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>3156</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3157</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>3158</span> 
<span class='line'>3159</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>3160</span>      * returns a new clone of the action
<span class='line'>3161</span>      * @returns {cc.ReverseTime}
<span class='line'>3162</span>      */</span><span class="WHIT">
<span class='line'>3163</span> </span><span class="WHIT">    </span><span class="NAME">clone</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>3164</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.ReverseTime</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3165</span> </span><span class="WHIT">        </span><span class="NAME">this._cloneDecoration</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3166</span> </span><span class="WHIT">        </span><span class="NAME">action.initWithAction</span><span class="PUNC">(</span><span class="NAME">this._other.clone</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3167</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3168</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>3169</span> 
<span class='line'>3170</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>3171</span>      * Start the action with target.
<span class='line'>3172</span>      * @param {cc.Node} target
<span class='line'>3173</span>      */</span><span class="WHIT">
<span class='line'>3174</span> </span><span class="WHIT">    </span><span class="NAME">startWithTarget</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">target</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>3175</span> </span><span class="WHIT">        </span><span class="NAME">cc.ActionInterval.prototype.startWithTarget.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">target</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3176</span> </span><span class="WHIT">        </span><span class="NAME">this._other.startWithTarget</span><span class="PUNC">(</span><span class="NAME">target</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3177</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>3178</span> 
<span class='line'>3179</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>3180</span>      * Called once per frame. Time is the number of seconds of a frame interval.
<span class='line'>3181</span>      * @param {Number} dt time in seconds
<span class='line'>3182</span>      */</span><span class="WHIT">
<span class='line'>3183</span> </span><span class="WHIT">    </span><span class="NAME">update</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>3184</span> </span><span class="WHIT">        </span><span class="NAME">dt</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._computeEaseTime</span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3185</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this._other</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>3186</span> </span><span class="WHIT">            </span><span class="NAME">this._other.update</span><span class="PUNC">(</span><span class="NUMB">1</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NAME">dt</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3187</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>3188</span> 
<span class='line'>3189</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>3190</span>      * Returns a reversed action.
<span class='line'>3191</span>      * @return {cc.ActionInterval}
<span class='line'>3192</span>      */</span><span class="WHIT">
<span class='line'>3193</span> </span><span class="WHIT">    </span><span class="NAME">reverse</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>3194</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._other.clone</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3195</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>3196</span> 
<span class='line'>3197</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>3198</span>      * Stop the action
<span class='line'>3199</span>      */</span><span class="WHIT">
<span class='line'>3200</span> </span><span class="WHIT">    </span><span class="NAME">stop</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>3201</span> </span><span class="WHIT">        </span><span class="NAME">this._other.stop</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3202</span> </span><span class="WHIT">        </span><span class="NAME">cc.Action.prototype.stop.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3203</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>3204</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3205</span> 
<span class='line'>3206</span> </span><span class="COMM">/**
<span class='line'>3207</span>  * Executes an action in reverse order, from time=duration to time=0.
<span class='line'>3208</span>  * @function
<span class='line'>3209</span>  * @param {cc.FiniteTimeAction} action
<span class='line'>3210</span>  * @return {cc.ReverseTime}
<span class='line'>3211</span>  * @example
<span class='line'>3212</span>  * // example
<span class='line'>3213</span>  *  var reverse = cc.reverseTime(this);
<span class='line'>3214</span>  */</span><span class="WHIT">
<span class='line'>3215</span> </span><span class="NAME">cc.reverseTime</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>3216</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.ReverseTime</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3217</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3218</span> </span><span class="COMM">/**
<span class='line'>3219</span>  * Please use cc.reverseTime instead.
<span class='line'>3220</span>  * Executes an action in reverse order, from time=duration to time=0.
<span class='line'>3221</span>  * @static
<span class='line'>3222</span>  * @deprecated since v3.0 please use cc.reverseTime instead.
<span class='line'>3223</span>  * @param {cc.FiniteTimeAction} action
<span class='line'>3224</span>  * @return {cc.ReverseTime}
<span class='line'>3225</span>  */</span><span class="WHIT">
<span class='line'>3226</span> </span><span class="NAME">cc.ReverseTime.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.reverseTime</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3227</span> 
<span class='line'>3228</span> 
<span class='line'>3229</span> </span><span class="COMM">/**  Animates a sprite given the name of an Animation
<span class='line'>3230</span>  * @class
<span class='line'>3231</span>  * @extends cc.ActionInterval
<span class='line'>3232</span>  * @param {cc.Animation} animation
<span class='line'>3233</span>  * @example
<span class='line'>3234</span>  * // create the animation with animation
<span class='line'>3235</span>  * var anim = new cc.Animate(dance_grey);
<span class='line'>3236</span>  */</span><span class="WHIT">
<span class='line'>3237</span> </span><span class="NAME">cc.Animate</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.ActionInterval.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.Animate# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>3238</span> </span><span class="WHIT">    </span><span class="NAME">_animation</span><span class="PUNC">:</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>3239</span> </span><span class="WHIT">    </span><span class="NAME">_nextFrame</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>3240</span> </span><span class="WHIT">    </span><span class="NAME">_origFrame</span><span class="PUNC">:</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>3241</span> </span><span class="WHIT">    </span><span class="NAME">_executedLoops</span><span class="PUNC">:</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>3242</span> </span><span class="WHIT">    </span><span class="NAME">_splitTimes</span><span class="PUNC">:</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>3243</span> 
<span class='line'>3244</span> </span><span class="WHIT">	</span><span class="COMM">/**
<span class='line'>3245</span>      * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. &lt;br />
<span class='line'>3246</span> 	 * create the animate with animation.
<span class='line'>3247</span> 	 * @param {cc.Animation} animation
<span class='line'>3248</span> 	 */</span><span class="WHIT">
<span class='line'>3249</span> </span><span class="WHIT">    </span><span class="NAME">ctor</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">animation</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>3250</span> </span><span class="WHIT">        </span><span class="NAME">cc.ActionInterval.prototype.ctor.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3251</span> </span><span class="WHIT">        </span><span class="NAME">this._splitTimes</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">[</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3252</span> 
<span class='line'>3253</span> </span><span class="WHIT">		</span><span class="NAME">animation</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">this.initWithAnimation</span><span class="PUNC">(</span><span class="NAME">animation</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3254</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>3255</span> 
<span class='line'>3256</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>3257</span>      * @return {cc.Animation}
<span class='line'>3258</span>      */</span><span class="WHIT">
<span class='line'>3259</span> </span><span class="WHIT">    </span><span class="NAME">getAnimation</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>3260</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._animation</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3261</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>3262</span> 
<span class='line'>3263</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>3264</span>      * @param {cc.Animation} animation
<span class='line'>3265</span>      */</span><span class="WHIT">
<span class='line'>3266</span> </span><span class="WHIT">    </span><span class="NAME">setAnimation</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">animation</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>3267</span> </span><span class="WHIT">        </span><span class="NAME">this._animation</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">animation</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3268</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>3269</span> 
<span class='line'>3270</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>3271</span>      * @param {cc.Animation} animation
<span class='line'>3272</span>      * @return {Boolean}
<span class='line'>3273</span>      */</span><span class="WHIT">
<span class='line'>3274</span> </span><span class="WHIT">    </span><span class="NAME">initWithAnimation</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">animation</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>3275</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="PUNC">!</span><span class="NAME">animation</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>3276</span> </span><span class="WHIT">            </span><span class="KEYW">throw</span><span class="WHIT"> </span><span class="STRN">"cc.Animate.initWithAnimation(): animation must be non-NULL"</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3277</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">singleDuration</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">animation.getDuration</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3278</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this.initWithDuration</span><span class="PUNC">(</span><span class="NAME">singleDuration</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">animation.getLoops</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>3279</span> </span><span class="WHIT">            </span><span class="NAME">this._nextFrame</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3280</span> </span><span class="WHIT">            </span><span class="NAME">this.setAnimation</span><span class="PUNC">(</span><span class="NAME">animation</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3281</span> 
<span class='line'>3282</span> </span><span class="WHIT">            </span><span class="NAME">this._origFrame</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3283</span> </span><span class="WHIT">            </span><span class="NAME">this._executedLoops</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3284</span> </span><span class="WHIT">            </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locTimes</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._splitTimes</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3285</span> </span><span class="WHIT">            </span><span class="NAME">locTimes.length</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3286</span> 
<span class='line'>3287</span> </span><span class="WHIT">            </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">accumUnitsOfTime</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3288</span> </span><span class="WHIT">            </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">newUnitOfTimeValue</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">singleDuration</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NAME">animation.getTotalDelayUnits</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3289</span> 
<span class='line'>3290</span> </span><span class="WHIT">            </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">frames</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">animation.getFrames</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3291</span> </span><span class="WHIT">            </span><span class="NAME">cc.arrayVerifyType</span><span class="PUNC">(</span><span class="NAME">frames</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.AnimationFrame</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3292</span> 
<span class='line'>3293</span> </span><span class="WHIT">            </span><span class="KEYW">for</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="NAME">frames.length</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="PUNC">++</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>3294</span> </span><span class="WHIT">                </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">frame</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">frames</span><span class="PUNC">[</span><span class="NAME">i</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3295</span> </span><span class="WHIT">                </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">value</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">accumUnitsOfTime</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">newUnitOfTimeValue</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">/</span><span class="WHIT"> </span><span class="NAME">singleDuration</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3296</span> </span><span class="WHIT">                </span><span class="NAME">accumUnitsOfTime</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">frame.getDelayUnits</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3297</span> </span><span class="WHIT">                </span><span class="NAME">locTimes.push</span><span class="PUNC">(</span><span class="NAME">value</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3298</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>3299</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3300</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>3301</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3302</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>3303</span> 
<span class='line'>3304</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>3305</span>      * returns a new clone of the action
<span class='line'>3306</span>      * @returns {cc.Animate}
<span class='line'>3307</span>      */</span><span class="WHIT">
<span class='line'>3308</span> </span><span class="WHIT">    </span><span class="NAME">clone</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>3309</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.Animate</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3310</span> </span><span class="WHIT">        </span><span class="NAME">this._cloneDecoration</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3311</span> </span><span class="WHIT">        </span><span class="NAME">action.initWithAnimation</span><span class="PUNC">(</span><span class="NAME">this._animation.clone</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3312</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3313</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>3314</span> 
<span class='line'>3315</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>3316</span>      * Start the action with target.
<span class='line'>3317</span>      * @param {cc.Sprite} target
<span class='line'>3318</span>      */</span><span class="WHIT">
<span class='line'>3319</span> </span><span class="WHIT">    </span><span class="NAME">startWithTarget</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">target</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>3320</span> </span><span class="WHIT">        </span><span class="NAME">cc.ActionInterval.prototype.startWithTarget.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">target</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3321</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this._animation.getRestoreOriginalFrame</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>3322</span> </span><span class="WHIT">            </span><span class="NAME">this._origFrame</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">target.displayFrame</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3323</span> </span><span class="WHIT">        </span><span class="NAME">this._nextFrame</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3324</span> </span><span class="WHIT">        </span><span class="NAME">this._executedLoops</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3325</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>3326</span> 
<span class='line'>3327</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>3328</span>      * Called once per frame. Time is the number of seconds of a frame interval.
<span class='line'>3329</span>      * @param {Number} dt
<span class='line'>3330</span>      */</span><span class="WHIT">
<span class='line'>3331</span> </span><span class="WHIT">    </span><span class="NAME">update</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>3332</span> </span><span class="WHIT">        </span><span class="NAME">dt</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._computeEaseTime</span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3333</span> </span><span class="WHIT">        </span><span class="COMM">// if t==1, ignore. Animation should finish with t==1</span><span class="WHIT">
<span class='line'>3334</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">dt</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="NUMB">1.0</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>3335</span> </span><span class="WHIT">            </span><span class="NAME">dt</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._animation.getLoops</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3336</span> 
<span class='line'>3337</span> </span><span class="WHIT">            </span><span class="COMM">// new loop?  If so, reset frame counter</span><span class="WHIT">
<span class='line'>3338</span> </span><span class="WHIT">            </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">loopNumber</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="WHIT"> </span><span class="PUNC">|</span><span class="WHIT"> </span><span class="NAME">dt</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3339</span> </span><span class="WHIT">            </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">loopNumber</span><span class="WHIT"> </span><span class="PUNC">></span><span class="WHIT"> </span><span class="NAME">this._executedLoops</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>3340</span> </span><span class="WHIT">                </span><span class="NAME">this._nextFrame</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3341</span> </span><span class="WHIT">                </span><span class="NAME">this._executedLoops</span><span class="PUNC">++</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3342</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>3343</span> 
<span class='line'>3344</span> </span><span class="WHIT">            </span><span class="COMM">// new t for animations</span><span class="WHIT">
<span class='line'>3345</span> </span><span class="WHIT">            </span><span class="NAME">dt</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">dt</span><span class="WHIT"> </span><span class="PUNC">%</span><span class="WHIT"> </span><span class="NUMB">1.0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3346</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>3347</span> 
<span class='line'>3348</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">frames</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._animation.getFrames</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3349</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">numberOfFrames</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">frames.length</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">locSplitTimes</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._splitTimes</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3350</span> </span><span class="WHIT">        </span><span class="KEYW">for</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._nextFrame</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="NAME">numberOfFrames</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="PUNC">++</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>3351</span> </span><span class="WHIT">            </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">locSplitTimes</span><span class="PUNC">[</span><span class="NAME">i</span><span class="PUNC">]</span><span class="WHIT"> </span><span class="PUNC">&lt;=</span><span class="WHIT"> </span><span class="NAME">dt</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>3352</span> </span><span class="WHIT">                </span><span class="NAME">this.target.setSpriteFrame</span><span class="PUNC">(</span><span class="NAME">frames</span><span class="PUNC">[</span><span class="NAME">i</span><span class="PUNC">]</span><span class="PUNC">.</span><span class="NAME">getSpriteFrame</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3353</span> </span><span class="WHIT">                </span><span class="NAME">this._nextFrame</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3354</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT"> </span><span class="KEYW">else</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>3355</span> </span><span class="WHIT">                </span><span class="COMM">// Issue 1438. Could be more than one frame per tick, due to low frame rate or frame delta &lt; 1/FPS</span><span class="WHIT">
<span class='line'>3356</span> </span><span class="WHIT">                </span><span class="KEYW">break</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3357</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>3358</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>3359</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>3360</span> 
<span class='line'>3361</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>3362</span>      * Returns a reversed action.
<span class='line'>3363</span>      * @return {cc.Animate}
<span class='line'>3364</span>      */</span><span class="WHIT">
<span class='line'>3365</span> </span><span class="WHIT">    </span><span class="NAME">reverse</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>3366</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locAnimation</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._animation</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3367</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">oldArray</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">locAnimation.getFrames</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3368</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">newArray</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">[</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3369</span> </span><span class="WHIT">        </span><span class="NAME">cc.arrayVerifyType</span><span class="PUNC">(</span><span class="NAME">oldArray</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">cc.AnimationFrame</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3370</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">oldArray.length</span><span class="WHIT"> </span><span class="PUNC">></span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>3371</span> </span><span class="WHIT">            </span><span class="KEYW">for</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">oldArray.length</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">>=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="PUNC">--</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>3372</span> </span><span class="WHIT">                </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">element</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">oldArray</span><span class="PUNC">[</span><span class="NAME">i</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3373</span> </span><span class="WHIT">                </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">!</span><span class="NAME">element</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>3374</span> </span><span class="WHIT">                    </span><span class="KEYW">break</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3375</span> </span><span class="WHIT">                </span><span class="NAME">newArray.push</span><span class="PUNC">(</span><span class="NAME">element.clone</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3376</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>3377</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>3378</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">newAnim</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.Animation</span><span class="PUNC">(</span><span class="NAME">newArray</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">locAnimation.getDelayPerUnit</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">locAnimation.getLoops</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3379</span> </span><span class="WHIT">        </span><span class="NAME">newAnim.setRestoreOriginalFrame</span><span class="PUNC">(</span><span class="NAME">locAnimation.getRestoreOriginalFrame</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3380</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.Animate</span><span class="PUNC">(</span><span class="NAME">newAnim</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3381</span> </span><span class="WHIT">        </span><span class="NAME">this._cloneDecoration</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3382</span> </span><span class="WHIT">        </span><span class="NAME">this._reverseEaseList</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3383</span> 
<span class='line'>3384</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3385</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>3386</span> 
<span class='line'>3387</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>3388</span>      * stop the action
<span class='line'>3389</span>      */</span><span class="WHIT">
<span class='line'>3390</span> </span><span class="WHIT">    </span><span class="NAME">stop</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>3391</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this._animation.getRestoreOriginalFrame</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">this.target</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>3392</span> </span><span class="WHIT">            </span><span class="NAME">this.target.setSpriteFrame</span><span class="PUNC">(</span><span class="NAME">this._origFrame</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3393</span> </span><span class="WHIT">        </span><span class="NAME">cc.Action.prototype.stop.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3394</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>3395</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3396</span> 
<span class='line'>3397</span> </span><span class="COMM">/**
<span class='line'>3398</span>  * create the animate with animation
<span class='line'>3399</span>  * @function
<span class='line'>3400</span>  * @param {cc.Animation} animation
<span class='line'>3401</span>  * @return {cc.Animate}
<span class='line'>3402</span>  * @example
<span class='line'>3403</span>  * // example
<span class='line'>3404</span>  * // create the animation with animation
<span class='line'>3405</span>  * var anim = cc.animate(dance_grey);
<span class='line'>3406</span>  */</span><span class="WHIT">
<span class='line'>3407</span> </span><span class="NAME">cc.animate</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">animation</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>3408</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.Animate</span><span class="PUNC">(</span><span class="NAME">animation</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3409</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3410</span> </span><span class="COMM">/**
<span class='line'>3411</span>  * Please use cc.animate instead
<span class='line'>3412</span>  * create the animate with animation
<span class='line'>3413</span>  * @static
<span class='line'>3414</span>  * @deprecated since v3.0 please use cc.animate instead.
<span class='line'>3415</span>  * @param {cc.Animation} animation
<span class='line'>3416</span>  * @return {cc.Animate}
<span class='line'>3417</span>  */</span><span class="WHIT">
<span class='line'>3418</span> </span><span class="NAME">cc.Animate.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.animate</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3419</span> 
<span class='line'>3420</span> </span><span class="COMM">/**
<span class='line'>3421</span>  * &lt;p>
<span class='line'>3422</span>  *     Overrides the target of an action so that it always runs on the target&lt;br/>
<span class='line'>3423</span>  *     specified at action creation rather than the one specified by runAction.
<span class='line'>3424</span>  * &lt;/p>
<span class='line'>3425</span>  * @class
<span class='line'>3426</span>  * @extends cc.ActionInterval
<span class='line'>3427</span>  * @param {cc.Node} target
<span class='line'>3428</span>  * @param {cc.FiniteTimeAction} action
<span class='line'>3429</span>  */</span><span class="WHIT">
<span class='line'>3430</span> </span><span class="NAME">cc.TargetedAction</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.ActionInterval.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.TargetedAction# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>3431</span> </span><span class="WHIT">    </span><span class="NAME">_action</span><span class="PUNC">:</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>3432</span> </span><span class="WHIT">    </span><span class="NAME">_forcedTarget</span><span class="PUNC">:</span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>3433</span> 
<span class='line'>3434</span> </span><span class="WHIT">	</span><span class="COMM">/**
<span class='line'>3435</span>      * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function. &lt;br />
<span class='line'>3436</span> 	 * Create an action with the specified action and forced target.
<span class='line'>3437</span> 	 * @param {cc.Node} target
<span class='line'>3438</span> 	 * @param {cc.FiniteTimeAction} action
<span class='line'>3439</span> 	 */</span><span class="WHIT">
<span class='line'>3440</span> </span><span class="WHIT">    </span><span class="NAME">ctor</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">target</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>3441</span> </span><span class="WHIT">        </span><span class="NAME">cc.ActionInterval.prototype.ctor.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3442</span> </span><span class="WHIT">		</span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">this.initWithTarget</span><span class="PUNC">(</span><span class="NAME">target</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3443</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>3444</span> 
<span class='line'>3445</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>3446</span>      * Init an action with the specified action and forced target
<span class='line'>3447</span>      * @param {cc.Node} target
<span class='line'>3448</span>      * @param {cc.FiniteTimeAction} action
<span class='line'>3449</span>      * @return {Boolean}
<span class='line'>3450</span>      */</span><span class="WHIT">
<span class='line'>3451</span> </span><span class="WHIT">    </span><span class="NAME">initWithTarget</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">target</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>3452</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this.initWithDuration</span><span class="PUNC">(</span><span class="NAME">action._duration</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>3453</span> </span><span class="WHIT">            </span><span class="NAME">this._forcedTarget</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">target</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3454</span> </span><span class="WHIT">            </span><span class="NAME">this._action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3455</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3456</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>3457</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3458</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>3459</span> 
<span class='line'>3460</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>3461</span>      * returns a new clone of the action
<span class='line'>3462</span>      * @returns {cc.TargetedAction}
<span class='line'>3463</span>      */</span><span class="WHIT">
<span class='line'>3464</span> </span><span class="WHIT">    </span><span class="NAME">clone</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>3465</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">action</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.TargetedAction</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3466</span> </span><span class="WHIT">        </span><span class="NAME">this._cloneDecoration</span><span class="PUNC">(</span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3467</span> </span><span class="WHIT">        </span><span class="NAME">action.initWithTarget</span><span class="PUNC">(</span><span class="NAME">this._forcedTarget</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._action.clone</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3468</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3469</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>3470</span> 
<span class='line'>3471</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>3472</span>      * Start the action with target.
<span class='line'>3473</span>      * @param {cc.Node} target
<span class='line'>3474</span>      */</span><span class="WHIT">
<span class='line'>3475</span> </span><span class="WHIT">    </span><span class="NAME">startWithTarget</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">target</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>3476</span> </span><span class="WHIT">        </span><span class="NAME">cc.ActionInterval.prototype.startWithTarget.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">target</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3477</span> </span><span class="WHIT">        </span><span class="NAME">this._action.startWithTarget</span><span class="PUNC">(</span><span class="NAME">this._forcedTarget</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3478</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>3479</span> 
<span class='line'>3480</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>3481</span>      * stop the action
<span class='line'>3482</span>      */</span><span class="WHIT">
<span class='line'>3483</span> </span><span class="WHIT">    </span><span class="NAME">stop</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>3484</span> </span><span class="WHIT">        </span><span class="NAME">this._action.stop</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3485</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>3486</span> 
<span class='line'>3487</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>3488</span>      * Called once per frame. Time is the number of seconds of a frame interval.
<span class='line'>3489</span>      * @param {Number} dt
<span class='line'>3490</span>      */</span><span class="WHIT">
<span class='line'>3491</span> </span><span class="WHIT">    </span><span class="NAME">update</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>3492</span> </span><span class="WHIT">        </span><span class="NAME">dt</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._computeEaseTime</span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3493</span> </span><span class="WHIT">        </span><span class="NAME">this._action.update</span><span class="PUNC">(</span><span class="NAME">dt</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3494</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>3495</span> 
<span class='line'>3496</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>3497</span>      * return the target that the action will be forced to run with
<span class='line'>3498</span>      * @return {cc.Node}
<span class='line'>3499</span>      */</span><span class="WHIT">
<span class='line'>3500</span> </span><span class="WHIT">    </span><span class="NAME">getForcedTarget</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>3501</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._forcedTarget</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3502</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>3503</span> 
<span class='line'>3504</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>3505</span>      * set the target that the action will be forced to run with
<span class='line'>3506</span>      * @param {cc.Node} forcedTarget
<span class='line'>3507</span>      */</span><span class="WHIT">
<span class='line'>3508</span> </span><span class="WHIT">    </span><span class="NAME">setForcedTarget</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">forcedTarget</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>3509</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this._forcedTarget</span><span class="WHIT"> </span><span class="PUNC">!=</span><span class="WHIT"> </span><span class="NAME">forcedTarget</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>3510</span> </span><span class="WHIT">            </span><span class="NAME">this._forcedTarget</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">forcedTarget</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3511</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>3512</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3513</span> 
<span class='line'>3514</span> </span><span class="COMM">/**
<span class='line'>3515</span>  * Create an action with the specified action and forced target
<span class='line'>3516</span>  * @function
<span class='line'>3517</span>  * @param {cc.Node} target
<span class='line'>3518</span>  * @param {cc.FiniteTimeAction} action
<span class='line'>3519</span>  * @return {cc.TargetedAction}
<span class='line'>3520</span>  */</span><span class="WHIT">
<span class='line'>3521</span> </span><span class="NAME">cc.targetedAction</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">target</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>3522</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.TargetedAction</span><span class="PUNC">(</span><span class="NAME">target</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">action</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3523</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3524</span> </span><span class="COMM">/**
<span class='line'>3525</span>  * Please use cc.targetedAction instead
<span class='line'>3526</span>  * Create an action with the specified action and forced target
<span class='line'>3527</span>  * @static
<span class='line'>3528</span>  * @deprecated since v3.0 please use cc.targetedAction instead.
<span class='line'>3529</span>  * @param {cc.Node} target
<span class='line'>3530</span>  * @param {cc.FiniteTimeAction} action
<span class='line'>3531</span>  * @return {cc.TargetedAction}
<span class='line'>3532</span>  */</span><span class="WHIT">
<span class='line'>3533</span> </span><span class="NAME">cc.TargetedAction.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.targetedAction</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>3534</span> </span></pre></body></html>