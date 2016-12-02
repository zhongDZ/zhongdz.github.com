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
<span class='line'> 28</span>  * cc.TMXObjectGroup represents the TMX object group.
<span class='line'> 29</span>  * @class
<span class='line'> 30</span>  * @extends cc.Class
<span class='line'> 31</span>  *
<span class='line'> 32</span>  * @property {Array}    properties  - Properties from the group. They can be added using tilemap editors
<span class='line'> 33</span>  * @property {String}   groupName   - Name of the group
<span class='line'> 34</span>  */</span><span class="WHIT">
<span class='line'> 35</span> </span><span class="NAME">cc.TMXObjectGroup</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Class.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.TMXObjectGroup# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 36</span> </span><span class="WHIT">	</span><span class="NAME">properties</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 37</span> </span><span class="WHIT">    </span><span class="NAME">groupName</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="STRN">""</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 38</span> 
<span class='line'> 39</span> </span><span class="WHIT">    </span><span class="NAME">_positionOffset</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 40</span> </span><span class="WHIT">    </span><span class="NAME">_objects</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 41</span> 
<span class='line'> 42</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'> 43</span>      * &lt;p>The cc.TMXObjectGroup's constructor. &lt;br/>
<span class='line'> 44</span>      * This function will automatically be invoked when you create a node using new construction: "var node = new cc.TMXObjectGroup()".&lt;br/>
<span class='line'> 45</span>      * Override it to extend its behavior, remember to call "this._super()" in the extended "ctor" function.&lt;/p>
<span class='line'> 46</span>      */</span><span class="WHIT">
<span class='line'> 47</span> </span><span class="WHIT">    </span><span class="NAME">ctor</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 48</span> </span><span class="WHIT">        </span><span class="NAME">this.groupName</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="STRN">""</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 49</span> </span><span class="WHIT">        </span><span class="NAME">this._positionOffset</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 50</span> </span><span class="WHIT">        </span><span class="NAME">this.properties</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">[</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 51</span> </span><span class="WHIT">        </span><span class="NAME">this._objects</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">[</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 52</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 53</span> 
<span class='line'> 54</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'> 55</span>      * Offset position of child objects
<span class='line'> 56</span>      * @return {cc.Point}
<span class='line'> 57</span>      */</span><span class="WHIT">
<span class='line'> 58</span> </span><span class="WHIT">    </span><span class="NAME">getPositionOffset</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 59</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">cc.p</span><span class="PUNC">(</span><span class="NAME">this._positionOffset</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 60</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 61</span> 
<span class='line'> 62</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'> 63</span>      * Offset position of child objects
<span class='line'> 64</span>      * @param {cc.Point} offset
<span class='line'> 65</span>      */</span><span class="WHIT">
<span class='line'> 66</span> </span><span class="WHIT">    </span><span class="NAME">setPositionOffset</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">offset</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 67</span> </span><span class="WHIT">        </span><span class="NAME">this._positionOffset.x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">offset.x</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 68</span> </span><span class="WHIT">        </span><span class="NAME">this._positionOffset.y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">offset.y</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 69</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 70</span> 
<span class='line'> 71</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'> 72</span>      * List of properties stored in a dictionary
<span class='line'> 73</span>      * @return {Array}
<span class='line'> 74</span>      */</span><span class="WHIT">
<span class='line'> 75</span> </span><span class="WHIT">    </span><span class="NAME">getProperties</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 76</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this.properties</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 77</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 78</span> 
<span class='line'> 79</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'> 80</span>      * List of properties stored in a dictionary
<span class='line'> 81</span>      * @param {object} Var
<span class='line'> 82</span>      */</span><span class="WHIT">
<span class='line'> 83</span> </span><span class="WHIT">    </span><span class="NAME">setProperties</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">Var</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 84</span> </span><span class="WHIT">        </span><span class="NAME">this.properties.push</span><span class="PUNC">(</span><span class="NAME">Var</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 85</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 86</span> 
<span class='line'> 87</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'> 88</span>      * Gets the Group name.
<span class='line'> 89</span>      * @return {String}
<span class='line'> 90</span>      */</span><span class="WHIT">
<span class='line'> 91</span> </span><span class="WHIT">    </span><span class="NAME">getGroupName</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 92</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this.groupName.toString</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 93</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 94</span> 
<span class='line'> 95</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'> 96</span>      * Set the Group name
<span class='line'> 97</span>      * @param {String} groupName
<span class='line'> 98</span>      */</span><span class="WHIT">
<span class='line'> 99</span> </span><span class="WHIT">    </span><span class="NAME">setGroupName</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">groupName</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>100</span> </span><span class="WHIT">        </span><span class="NAME">this.groupName</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">groupName</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>101</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>102</span> 
<span class='line'>103</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>104</span>      * Return the value for the specific property name
<span class='line'>105</span>      * @param {String} propertyName
<span class='line'>106</span>      * @return {object}
<span class='line'>107</span>      */</span><span class="WHIT">
<span class='line'>108</span> </span><span class="WHIT">    </span><span class="NAME">propertyNamed</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">propertyName</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>109</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this.properties</span><span class="PUNC">[</span><span class="NAME">propertyName</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>110</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>111</span> 
<span class='line'>112</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>113</span>      * &lt;p>Return the dictionary for the specific object name. &lt;br />
<span class='line'>114</span>      * It will return the 1st object found on the array for the given name.&lt;/p>
<span class='line'>115</span>      * @param {String} objectName
<span class='line'>116</span>      * @return {object|Null}
<span class='line'>117</span>      */</span><span class="WHIT">
<span class='line'>118</span> </span><span class="WHIT">    </span><span class="NAME">objectNamed</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">objectName</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>119</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this._objects</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">this._objects.length</span><span class="WHIT"> </span><span class="PUNC">></span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>120</span> </span><span class="WHIT">            </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locObjects</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._objects</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>121</span> </span><span class="WHIT">            </span><span class="KEYW">for</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">len</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">locObjects.length</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="NAME">len</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="PUNC">++</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>122</span> </span><span class="WHIT">                </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">name</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">locObjects</span><span class="PUNC">[</span><span class="NAME">i</span><span class="PUNC">]</span><span class="PUNC">[</span><span class="STRN">"name"</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>123</span> </span><span class="WHIT">                </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">name</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">name</span><span class="WHIT"> </span><span class="PUNC">==</span><span class="WHIT"> </span><span class="NAME">objectName</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>124</span> </span><span class="WHIT">                    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">locObjects</span><span class="PUNC">[</span><span class="NAME">i</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>125</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>126</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>127</span> </span><span class="WHIT">        </span><span class="COMM">// object not found</span><span class="WHIT">
<span class='line'>128</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>129</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>130</span> 
<span class='line'>131</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>132</span>      * Gets the objects.
<span class='line'>133</span>      * @return {Array}
<span class='line'>134</span>      */</span><span class="WHIT">
<span class='line'>135</span> </span><span class="WHIT">    </span><span class="NAME">getObjects</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>136</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._objects</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>137</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>138</span> 
<span class='line'>139</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>140</span>      * Set the objects.
<span class='line'>141</span>      * @param {object} objects
<span class='line'>142</span>      */</span><span class="WHIT">
<span class='line'>143</span> </span><span class="WHIT">    </span><span class="NAME">setObjects</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">objects</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>144</span> </span><span class="WHIT">        </span><span class="NAME">this._objects.push</span><span class="PUNC">(</span><span class="NAME">objects</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>145</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>146</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>147</span> </span></pre></body></html>