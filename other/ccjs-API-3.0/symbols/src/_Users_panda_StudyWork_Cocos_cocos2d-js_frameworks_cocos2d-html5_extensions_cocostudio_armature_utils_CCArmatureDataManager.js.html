<html><head><meta http-equiv="content-type" content="text/html; charset=UTF-8"> <style>
	.KEYW {color: #933;}
	.COMM {color: #bbb; font-style: italic;}
	.NUMB {color: #393;}
	.STRN {color: #393;}
	.REGX {color: #339;}
	.line {border-right: 1px dotted #666; color: #666; font-style: normal;}
	</style></head><body><pre><span class='line'>  1</span> <span class="COMM">/****************************************************************************
<span class='line'>  2</span>  Copyright (c) 2011-2012 cocos2d-x.org
<span class='line'>  3</span>  Copyright (c) 2013-2014 Chukong Technologies Inc.
<span class='line'>  4</span> 
<span class='line'>  5</span>  http://www.cocos2d-x.org
<span class='line'>  6</span> 
<span class='line'>  7</span>  Permission is hereby granted, free of charge, to any person obtaining a copy
<span class='line'>  8</span>  of this software and associated documentation files (the "Software"), to deal
<span class='line'>  9</span>  in the Software without restriction, including without limitation the rights
<span class='line'> 10</span>  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
<span class='line'> 11</span>  copies of the Software, and to permit persons to whom the Software is
<span class='line'> 12</span>  furnished to do so, subject to the following conditions:
<span class='line'> 13</span> 
<span class='line'> 14</span>  The above copyright notice and this permission notice shall be included in
<span class='line'> 15</span>  all copies or substantial portions of the Software.
<span class='line'> 16</span> 
<span class='line'> 17</span>  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
<span class='line'> 18</span>  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
<span class='line'> 19</span>  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
<span class='line'> 20</span>  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
<span class='line'> 21</span>  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
<span class='line'> 22</span>  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
<span class='line'> 23</span>  THE SOFTWARE.
<span class='line'> 24</span>  ****************************************************************************/</span><span class="WHIT">
<span class='line'> 25</span> 
<span class='line'> 26</span> </span><span class="COMM">/**
<span class='line'> 27</span>  * RelativeData uses to save plist files, armature files, animations and textures for armature data manager.
<span class='line'> 28</span>  * @constructor
<span class='line'> 29</span>  */</span><span class="WHIT">
<span class='line'> 30</span> </span><span class="NAME">ccs.RelativeData</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 31</span> </span><span class="WHIT">    </span><span class="NAME">this.plistFiles</span><span class="PUNC">=</span><span class="PUNC">[</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 32</span> </span><span class="WHIT">    </span><span class="NAME">this.armatures</span><span class="PUNC">=</span><span class="PUNC">[</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 33</span> </span><span class="WHIT">    </span><span class="NAME">this.animations</span><span class="PUNC">=</span><span class="PUNC">[</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 34</span> </span><span class="WHIT">    </span><span class="NAME">this.textures</span><span class="PUNC">=</span><span class="PUNC">[</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 35</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 36</span> 
<span class='line'> 37</span> </span><span class="COMM">/**
<span class='line'> 38</span>  * ccs.armatureDataManager is a singleton object which format and manage armature configuration and armature animation
<span class='line'> 39</span>  * @class
<span class='line'> 40</span>  * @name ccs.armatureDataManager
<span class='line'> 41</span>  */</span><span class="WHIT">
<span class='line'> 42</span> </span><span class="NAME">ccs.armatureDataManager</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="COMM">/** @lends ccs.armatureDataManager# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 43</span> </span><span class="WHIT">    </span><span class="NAME">_animationDatas</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 44</span> </span><span class="WHIT">    </span><span class="NAME">_armatureDatas</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 45</span> </span><span class="WHIT">    </span><span class="NAME">_textureDatas</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 46</span> </span><span class="WHIT">    </span><span class="NAME">_autoLoadSpriteFile</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 47</span> </span><span class="WHIT">    </span><span class="NAME">_relativeDatas</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 48</span> 
<span class='line'> 49</span> </span><span class="WHIT">    </span><span class="NAME">s_sharedArmatureDataManager</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 50</span> 
<span class='line'> 51</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'> 52</span>      * Removes armature cache data by configFilePath
<span class='line'> 53</span>      * @param {String} configFilePath
<span class='line'> 54</span>      */</span><span class="WHIT">
<span class='line'> 55</span> </span><span class="WHIT">    </span><span class="NAME">removeArmatureFileInfo</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="PUNC">(</span><span class="NAME">configFilePath</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 56</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">data</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.getRelativeData</span><span class="PUNC">(</span><span class="NAME">configFilePath</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 57</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="NAME">data</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 58</span> </span><span class="WHIT">            </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">i</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">obj</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 59</span> </span><span class="WHIT">            </span><span class="KEYW">for</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="NAME">data.armatures.length</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="PUNC">++</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 60</span> </span><span class="WHIT">                </span><span class="NAME">obj</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">data.armatures</span><span class="PUNC">[</span><span class="NAME">i</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 61</span> </span><span class="WHIT">                </span><span class="NAME">this.removeArmatureData</span><span class="PUNC">(</span><span class="NAME">obj</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 62</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'> 63</span> </span><span class="WHIT">            </span><span class="KEYW">for</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="NAME">data.animations.length</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="PUNC">++</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 64</span> </span><span class="WHIT">                </span><span class="NAME">obj</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">data.animations</span><span class="PUNC">[</span><span class="NAME">i</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 65</span> </span><span class="WHIT">                </span><span class="NAME">this.removeAnimationData</span><span class="PUNC">(</span><span class="NAME">obj</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 66</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'> 67</span> </span><span class="WHIT">            </span><span class="KEYW">for</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="NAME">data.textures.length</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="PUNC">++</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 68</span> </span><span class="WHIT">                </span><span class="NAME">obj</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">data.textures</span><span class="PUNC">[</span><span class="NAME">i</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 69</span> </span><span class="WHIT">                </span><span class="NAME">this.removeTextureData</span><span class="PUNC">(</span><span class="NAME">obj</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 70</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'> 71</span> </span><span class="WHIT">            </span><span class="KEYW">for</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="NAME">data.plistFiles.length</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="PUNC">++</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 72</span> </span><span class="WHIT">                </span><span class="NAME">obj</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">data.plistFiles</span><span class="PUNC">[</span><span class="NAME">i</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 73</span> </span><span class="WHIT">                </span><span class="NAME">cc.spriteFrameCache.removeSpriteFramesFromFile</span><span class="PUNC">(</span><span class="NAME">obj</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 74</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'> 75</span> </span><span class="WHIT">            </span><span class="KEYW">delete</span><span class="WHIT"> </span><span class="NAME">this._relativeDatas</span><span class="PUNC">[</span><span class="NAME">configFilePath</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 76</span> </span><span class="WHIT">            </span><span class="NAME">ccs.dataReaderHelper.removeConfigFile</span><span class="PUNC">(</span><span class="NAME">configFilePath</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 77</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'> 78</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 79</span> 
<span class='line'> 80</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'> 81</span>      * Adds armature data
<span class='line'> 82</span>      * @param {string} id The id of the armature data
<span class='line'> 83</span>      * @param {ccs.ArmatureData} armatureData
<span class='line'> 84</span>      */</span><span class="WHIT">
<span class='line'> 85</span> </span><span class="WHIT">    </span><span class="NAME">addArmatureData</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">id</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">armatureData</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">configFilePath</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 86</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">data</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.getRelativeData</span><span class="PUNC">(</span><span class="NAME">configFilePath</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 87</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">data</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 88</span> </span><span class="WHIT">            </span><span class="NAME">data.armatures.push</span><span class="PUNC">(</span><span class="NAME">id</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 89</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'> 90</span> </span><span class="WHIT">        </span><span class="NAME">this._armatureDatas</span><span class="PUNC">[</span><span class="NAME">id</span><span class="PUNC">]</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">armatureData</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 91</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'> 92</span> 
<span class='line'> 93</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'> 94</span>      * Gets armatureData by id
<span class='line'> 95</span>      * @param {String} id
<span class='line'> 96</span>      * @return {ccs.ArmatureData}
<span class='line'> 97</span>      */</span><span class="WHIT">
<span class='line'> 98</span> </span><span class="WHIT">    </span><span class="NAME">getArmatureData</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">id</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'> 99</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">armatureData</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>100</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this._armatureDatas</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>101</span> </span><span class="WHIT">            </span><span class="NAME">armatureData</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._armatureDatas</span><span class="PUNC">[</span><span class="NAME">id</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>102</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>103</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">armatureData</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>104</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>105</span> 
<span class='line'>106</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>107</span>      * Removes armature data from armature data manager.
<span class='line'>108</span>      * @param {string} id
<span class='line'>109</span>      */</span><span class="WHIT">
<span class='line'>110</span> </span><span class="WHIT">    </span><span class="NAME">removeArmatureData</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="PUNC">(</span><span class="NAME">id</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>111</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this._armatureDatas</span><span class="PUNC">[</span><span class="NAME">id</span><span class="PUNC">]</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>112</span> </span><span class="WHIT">            </span><span class="KEYW">delete</span><span class="WHIT"> </span><span class="NAME">this._armatureDatas</span><span class="PUNC">[</span><span class="NAME">id</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>113</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>114</span> 
<span class='line'>115</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>116</span>      * Adds animation data to armature data manager.
<span class='line'>117</span>      * @param {String} id
<span class='line'>118</span>      * @param {ccs.AnimationData} animationData
<span class='line'>119</span>      */</span><span class="WHIT">
<span class='line'>120</span> </span><span class="WHIT">    </span><span class="NAME">addAnimationData</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">id</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">animationData</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">configFilePath</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>121</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">data</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.getRelativeData</span><span class="PUNC">(</span><span class="NAME">configFilePath</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>122</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="NAME">data</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>123</span> </span><span class="WHIT">            </span><span class="NAME">data.animations.push</span><span class="PUNC">(</span><span class="NAME">id</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>124</span> </span><span class="WHIT">        </span><span class="NAME">this._animationDatas</span><span class="PUNC">[</span><span class="NAME">id</span><span class="PUNC">]</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">animationData</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>125</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>126</span> 
<span class='line'>127</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>128</span>      * Gets animationData by id
<span class='line'>129</span>      * @param {String} id
<span class='line'>130</span>      * @return {ccs.AnimationData}
<span class='line'>131</span>      */</span><span class="WHIT">
<span class='line'>132</span> </span><span class="WHIT">    </span><span class="NAME">getAnimationData</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">id</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>133</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">animationData</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>134</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this._animationDatas</span><span class="PUNC">[</span><span class="NAME">id</span><span class="PUNC">]</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>135</span> </span><span class="WHIT">            </span><span class="NAME">animationData</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._animationDatas</span><span class="PUNC">[</span><span class="NAME">id</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>136</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>137</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">animationData</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>138</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>139</span> 
<span class='line'>140</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>141</span>      * Removes animation data
<span class='line'>142</span>      * @param {string} id
<span class='line'>143</span>      */</span><span class="WHIT">
<span class='line'>144</span> </span><span class="WHIT">    </span><span class="NAME">removeAnimationData</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="PUNC">(</span><span class="NAME">id</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>145</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this._animationDatas</span><span class="PUNC">[</span><span class="NAME">id</span><span class="PUNC">]</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>146</span> </span><span class="WHIT">            </span><span class="KEYW">delete</span><span class="WHIT"> </span><span class="NAME">this._animationDatas</span><span class="PUNC">[</span><span class="NAME">id</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>147</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>148</span> 
<span class='line'>149</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>150</span>      * Adds texture data to Armature data manager.
<span class='line'>151</span>      * @param {String} id
<span class='line'>152</span>      * @param {ccs.TextureData} textureData
<span class='line'>153</span>      */</span><span class="WHIT">
<span class='line'>154</span> </span><span class="WHIT">    </span><span class="NAME">addTextureData</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">id</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">textureData</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">configFilePath</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>155</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">data</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.getRelativeData</span><span class="PUNC">(</span><span class="NAME">configFilePath</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>156</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">data</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>157</span> </span><span class="WHIT">            </span><span class="NAME">data.textures.push</span><span class="PUNC">(</span><span class="NAME">id</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>158</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>159</span> </span><span class="WHIT">        </span><span class="NAME">this._textureDatas</span><span class="PUNC">[</span><span class="NAME">id</span><span class="PUNC">]</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">textureData</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>160</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>161</span> 
<span class='line'>162</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>163</span>      * Gets textureData by id
<span class='line'>164</span>      * @param {String} id
<span class='line'>165</span>      * @return {ccs.TextureData}
<span class='line'>166</span>      */</span><span class="WHIT">
<span class='line'>167</span> </span><span class="WHIT">    </span><span class="NAME">getTextureData</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">id</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>168</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">textureData</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>169</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this._textureDatas</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>170</span> </span><span class="WHIT">            </span><span class="NAME">textureData</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._textureDatas</span><span class="PUNC">[</span><span class="NAME">id</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>171</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>172</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">textureData</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>173</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>174</span> 
<span class='line'>175</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>176</span>      * Removes texture data by id
<span class='line'>177</span>      * @param {string} id
<span class='line'>178</span>      */</span><span class="WHIT">
<span class='line'>179</span> </span><span class="WHIT">    </span><span class="NAME">removeTextureData</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="PUNC">(</span><span class="NAME">id</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>180</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this._textureDatas</span><span class="PUNC">[</span><span class="NAME">id</span><span class="PUNC">]</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>181</span> </span><span class="WHIT">            </span><span class="KEYW">delete</span><span class="WHIT"> </span><span class="NAME">this._textureDatas</span><span class="PUNC">[</span><span class="NAME">id</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>182</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>183</span> 
<span class='line'>184</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>185</span>      * Adds ArmatureFileInfo, it is managed by CCArmatureDataManager.
<span class='line'>186</span>      * @param {String} imagePath
<span class='line'>187</span>      * @param {String} plistPath
<span class='line'>188</span>      * @param {String} configFilePath
<span class='line'>189</span>      * @example
<span class='line'>190</span>      * //example1
<span class='line'>191</span>      * ccs.armatureDataManager.addArmatureFileInfo("res/test.json");
<span class='line'>192</span>      * //example2
<span class='line'>193</span>      * ccs.armatureDataManager.addArmatureFileInfo("res/test.png","res/test.plist","res/test.json");
<span class='line'>194</span>      */</span><span class="WHIT">
<span class='line'>195</span> </span><span class="WHIT">    </span><span class="NAME">addArmatureFileInfo</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="COMM">/*imagePath, plistPath, configFilePath*/</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>196</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">imagePath</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">plistPath</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">configFilePath</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>197</span> </span><span class="WHIT">        </span><span class="KEYW">switch</span><span class="PUNC">(</span><span class="NAME">arguments.length</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>198</span> </span><span class="WHIT">            </span><span class="KEYW">case</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">:</span><span class="WHIT">
<span class='line'>199</span> </span><span class="WHIT">                </span><span class="NAME">configFilePath</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">arguments</span><span class="PUNC">[</span><span class="NUMB">0</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>200</span> 
<span class='line'>201</span> </span><span class="WHIT">                </span><span class="NAME">this.addRelativeData</span><span class="PUNC">(</span><span class="NAME">configFilePath</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>202</span> 
<span class='line'>203</span> </span><span class="WHIT">                </span><span class="NAME">this._autoLoadSpriteFile</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>204</span> </span><span class="WHIT">                </span><span class="NAME">ccs.dataReaderHelper.addDataFromFile</span><span class="PUNC">(</span><span class="NAME">configFilePath</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>205</span> </span><span class="WHIT">                </span><span class="KEYW">break</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>206</span> </span><span class="WHIT">            </span><span class="KEYW">case</span><span class="WHIT"> </span><span class="NUMB">3</span><span class="PUNC">:</span><span class="WHIT">
<span class='line'>207</span> </span><span class="WHIT">                </span><span class="NAME">imagePath</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">arguments</span><span class="PUNC">[</span><span class="NUMB">0</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>208</span> </span><span class="WHIT">                </span><span class="NAME">plistPath</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">arguments</span><span class="PUNC">[</span><span class="NUMB">1</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>209</span> </span><span class="WHIT">                </span><span class="NAME">configFilePath</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">arguments</span><span class="PUNC">[</span><span class="NUMB">2</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>210</span> 
<span class='line'>211</span> </span><span class="WHIT">                </span><span class="NAME">this.addRelativeData</span><span class="PUNC">(</span><span class="NAME">configFilePath</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>212</span> 
<span class='line'>213</span> </span><span class="WHIT">                </span><span class="NAME">this._autoLoadSpriteFile</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>214</span> </span><span class="WHIT">                </span><span class="NAME">ccs.dataReaderHelper.addDataFromFile</span><span class="PUNC">(</span><span class="NAME">configFilePath</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>215</span> </span><span class="WHIT">                </span><span class="NAME">this.addSpriteFrameFromFile</span><span class="PUNC">(</span><span class="NAME">plistPath</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">imagePath</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>216</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>217</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>218</span> 
<span class='line'>219</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>220</span>      * Adds ArmatureFileInfo, it is managed by CCArmatureDataManager.
<span class='line'>221</span>      * @param {String} imagePath
<span class='line'>222</span>      * @param {String} plistPath
<span class='line'>223</span>      * @param {String} configFilePath
<span class='line'>224</span>      * @param {Function} selector
<span class='line'>225</span>      * @param {Object} target
<span class='line'>226</span>      */</span><span class="WHIT">
<span class='line'>227</span> </span><span class="WHIT">    </span><span class="NAME">addArmatureFileInfoAsync</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="COMM">/*imagePath, plistPath, configFilePath, selector, target*/</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>228</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">imagePath</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">plistPath</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">configFilePath</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">target</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">selector</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>229</span> </span><span class="WHIT">        </span><span class="KEYW">switch</span><span class="PUNC">(</span><span class="NAME">arguments.length</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>230</span> </span><span class="WHIT">            </span><span class="KEYW">case</span><span class="WHIT"> </span><span class="NUMB">3</span><span class="PUNC">:</span><span class="WHIT">
<span class='line'>231</span> </span><span class="WHIT">                </span><span class="NAME">configFilePath</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">arguments</span><span class="PUNC">[</span><span class="NUMB">0</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>232</span> </span><span class="WHIT">                </span><span class="NAME">target</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">arguments</span><span class="PUNC">[</span><span class="NUMB">2</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>233</span> </span><span class="WHIT">                </span><span class="NAME">selector</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">arguments</span><span class="PUNC">[</span><span class="NUMB">1</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>234</span> </span><span class="WHIT">                </span><span class="NAME">this.addRelativeData</span><span class="PUNC">(</span><span class="NAME">configFilePath</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>235</span> </span><span class="WHIT">                </span><span class="NAME">this._autoLoadSpriteFile</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>236</span> </span><span class="WHIT">                </span><span class="NAME">ccs.dataReaderHelper.addDataFromFileAsync</span><span class="PUNC">(</span><span class="STRN">""</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="STRN">""</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">configFilePath</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">selector</span><span class="PUNC">,</span><span class="NAME">target</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>237</span> </span><span class="WHIT">                </span><span class="KEYW">break</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>238</span> </span><span class="WHIT">            </span><span class="KEYW">case</span><span class="WHIT"> </span><span class="NUMB">5</span><span class="PUNC">:</span><span class="WHIT">
<span class='line'>239</span> </span><span class="WHIT">                </span><span class="NAME">imagePath</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">arguments</span><span class="PUNC">[</span><span class="NUMB">0</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>240</span> </span><span class="WHIT">                </span><span class="NAME">plistPath</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">arguments</span><span class="PUNC">[</span><span class="NUMB">1</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>241</span> </span><span class="WHIT">                </span><span class="NAME">configFilePath</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">arguments</span><span class="PUNC">[</span><span class="NUMB">2</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>242</span> </span><span class="WHIT">                </span><span class="NAME">target</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">arguments</span><span class="PUNC">[</span><span class="NUMB">4</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>243</span> </span><span class="WHIT">                </span><span class="NAME">selector</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">arguments</span><span class="PUNC">[</span><span class="NUMB">3</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>244</span> </span><span class="WHIT">                </span><span class="NAME">this.addRelativeData</span><span class="PUNC">(</span><span class="NAME">configFilePath</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>245</span> 
<span class='line'>246</span> </span><span class="WHIT">                </span><span class="NAME">this._autoLoadSpriteFile</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>247</span> </span><span class="WHIT">                </span><span class="NAME">ccs.dataReaderHelper.addDataFromFileAsync</span><span class="PUNC">(</span><span class="NAME">imagePath</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">plistPath</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">configFilePath</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">selector</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">target</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>248</span> </span><span class="WHIT">                </span><span class="NAME">this.addSpriteFrameFromFile</span><span class="PUNC">(</span><span class="NAME">plistPath</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">imagePath</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>249</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>250</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>251</span> 
<span class='line'>252</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>253</span>      * Add sprite frame to CCSpriteFrameCache, it will save display name and it's relative image name
<span class='line'>254</span>      * @param {String} plistPath
<span class='line'>255</span>      * @param {String} imagePath
<span class='line'>256</span>      * @param {String} configFilePath
<span class='line'>257</span>      */</span><span class="WHIT">
<span class='line'>258</span> </span><span class="WHIT">    </span><span class="NAME">addSpriteFrameFromFile</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">plistPath</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">imagePath</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">configFilePath</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>259</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">data</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.getRelativeData</span><span class="PUNC">(</span><span class="NAME">configFilePath</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>260</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="NAME">data</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>261</span> </span><span class="WHIT">            </span><span class="NAME">data.plistFiles.push</span><span class="PUNC">(</span><span class="NAME">plistPath</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>262</span> </span><span class="WHIT">        </span><span class="NAME">ccs.spriteFrameCacheHelper.addSpriteFrameFromFile</span><span class="PUNC">(</span><span class="NAME">plistPath</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">imagePath</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>263</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>264</span> 
<span class='line'>265</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>266</span>      * Returns whether or not need auto load sprite file
<span class='line'>267</span>      * @returns {boolean}
<span class='line'>268</span>      */</span><span class="WHIT">
<span class='line'>269</span> </span><span class="WHIT">    </span><span class="NAME">isAutoLoadSpriteFile</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>270</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._autoLoadSpriteFile</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>271</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>272</span> 
<span class='line'>273</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>274</span>      * Returns armature Data of Armature data manager.
<span class='line'>275</span>      * @return {Object}
<span class='line'>276</span>      */</span><span class="WHIT">
<span class='line'>277</span> </span><span class="WHIT">    </span><span class="NAME">getArmatureDatas</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>278</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._armatureDatas</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>279</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>280</span> 
<span class='line'>281</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>282</span>      * Returns animation data of Armature data manager.
<span class='line'>283</span>      * @return {Object}
<span class='line'>284</span>      */</span><span class="WHIT">
<span class='line'>285</span> </span><span class="WHIT">    </span><span class="NAME">getAnimationDatas</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>286</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._animationDatas</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>287</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>288</span> 
<span class='line'>289</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>290</span>      * Returns texture data of Armature data manager.
<span class='line'>291</span>      * @return {Object}
<span class='line'>292</span>      */</span><span class="WHIT">
<span class='line'>293</span> </span><span class="WHIT">    </span><span class="NAME">getTextureDatas</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>294</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._textureDatas</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>295</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>296</span> 
<span class='line'>297</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>298</span>      * Adds Relative data of Armature data manager.
<span class='line'>299</span>      * @param {String} configFilePath
<span class='line'>300</span>      */</span><span class="WHIT">
<span class='line'>301</span> </span><span class="WHIT">    </span><span class="NAME">addRelativeData</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">configFilePath</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>302</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">!</span><span class="NAME">this._relativeDatas</span><span class="PUNC">[</span><span class="NAME">configFilePath</span><span class="PUNC">]</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>303</span> </span><span class="WHIT">            </span><span class="NAME">this._relativeDatas</span><span class="PUNC">[</span><span class="NAME">configFilePath</span><span class="PUNC">]</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">ccs.RelativeData</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>304</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>305</span> 
<span class='line'>306</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>307</span>      * Gets RelativeData of Armature data manager.
<span class='line'>308</span>      * @param {String} configFilePath
<span class='line'>309</span>      * @returns {ccs.RelativeData}
<span class='line'>310</span>      */</span><span class="WHIT">
<span class='line'>311</span> </span><span class="WHIT">    </span><span class="NAME">getRelativeData</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">configFilePath</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>312</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._relativeDatas</span><span class="PUNC">[</span><span class="NAME">configFilePath</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>313</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>314</span> 
<span class='line'>315</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>316</span>      * Clear data
<span class='line'>317</span>      */</span><span class="WHIT">
<span class='line'>318</span> </span><span class="WHIT">    </span><span class="NAME">clear</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>319</span> </span><span class="WHIT">        </span><span class="NAME">this._animationDatas</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>320</span> </span><span class="WHIT">        </span><span class="NAME">this._armatureDatas</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>321</span> </span><span class="WHIT">        </span><span class="NAME">this._textureDatas</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>322</span> </span><span class="WHIT">        </span><span class="NAME">ccs.spriteFrameCacheHelper.clear</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>323</span> </span><span class="WHIT">        </span><span class="NAME">ccs.dataReaderHelper.clear</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>324</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>325</span> </span><span class="PUNC">}</span><span class="PUNC">;</span></pre></body></html>