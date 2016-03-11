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
<span class='line'> 28</span>  Orthogonal orientation
<span class='line'> 29</span>  * @constant
<span class='line'> 30</span>  * @type Number
<span class='line'> 31</span>  */</span><span class="WHIT">
<span class='line'> 32</span> </span><span class="NAME">cc.TMX_ORIENTATION_ORTHO</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 33</span> 
<span class='line'> 34</span> </span><span class="COMM">/**
<span class='line'> 35</span>  * Hexagonal orientation
<span class='line'> 36</span>  * @constant
<span class='line'> 37</span>  * @type Number
<span class='line'> 38</span>  */</span><span class="WHIT">
<span class='line'> 39</span> 
<span class='line'> 40</span> </span><span class="NAME">cc.TMX_ORIENTATION_HEX</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 41</span> 
<span class='line'> 42</span> </span><span class="COMM">/**
<span class='line'> 43</span>  * Isometric orientation
<span class='line'> 44</span>  * @constant
<span class='line'> 45</span>  * @type Number
<span class='line'> 46</span>  */</span><span class="WHIT">
<span class='line'> 47</span> </span><span class="NAME">cc.TMX_ORIENTATION_ISO</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">2</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'> 48</span> 
<span class='line'> 49</span> </span><span class="COMM">/**
<span class='line'> 50</span>  * &lt;p>cc.TMXTiledMap knows how to parse and render a TMX map.&lt;/p>
<span class='line'> 51</span>  *
<span class='line'> 52</span>  * &lt;p>It adds support for the TMX tiled map format used by http://www.mapeditor.org &lt;br />
<span class='line'> 53</span>  * It supports isometric, hexagonal and orthogonal tiles.&lt;br />
<span class='line'> 54</span>  * It also supports object groups, objects, and properties.&lt;/p>
<span class='line'> 55</span>  *
<span class='line'> 56</span>  * &lt;p>Features: &lt;br />
<span class='line'> 57</span>  * - Each tile will be treated as an cc.Sprite&lt;br />
<span class='line'> 58</span>  * - The sprites are created on demand. They will be created only when you call "layer.getTileAt(position)" &lt;br />
<span class='line'> 59</span>  * - Each tile can be rotated / moved / scaled / tinted / "opacitied", since each tile is a cc.Sprite&lt;br />
<span class='line'> 60</span>  * - Tiles can be added/removed in runtime&lt;br />
<span class='line'> 61</span>  * - The z-order of the tiles can be modified in runtime&lt;br />
<span class='line'> 62</span>  * - Each tile has an anchorPoint of (0,0) &lt;br />
<span class='line'> 63</span>  * - The anchorPoint of the TMXTileMap is (0,0) &lt;br />
<span class='line'> 64</span>  * - The TMX layers will be added as a child &lt;br />
<span class='line'> 65</span>  * - The TMX layers will be aliased by default &lt;br />
<span class='line'> 66</span>  * - The tileset image will be loaded using the cc.TextureCache &lt;br />
<span class='line'> 67</span>  * - Each tile will have a unique tag&lt;br />
<span class='line'> 68</span>  * - Each tile will have a unique z value. top-left: z=1, bottom-right: z=max z&lt;br />
<span class='line'> 69</span>  * - Each object group will be treated as an cc.MutableArray &lt;br />
<span class='line'> 70</span>  * - Object class which will contain all the properties in a dictionary&lt;br />
<span class='line'> 71</span>  * - Properties can be assigned to the Map, Layer, Object Group, and Object&lt;/p>
<span class='line'> 72</span>  *
<span class='line'> 73</span>  * &lt;p>Limitations: &lt;br />
<span class='line'> 74</span>  * - It only supports one tileset per layer. &lt;br />
<span class='line'> 75</span>  * - Embeded images are not supported &lt;br />
<span class='line'> 76</span>  * - It only supports the XML format (the JSON format is not supported)&lt;/p>
<span class='line'> 77</span>  *
<span class='line'> 78</span>  * &lt;p>Technical description: &lt;br />
<span class='line'> 79</span>  * Each layer is created using an cc.TMXLayer (subclass of cc.SpriteBatchNode). If you have 5 layers, then 5 cc.TMXLayer will be created, &lt;br />
<span class='line'> 80</span>  * unless the layer visibility is off. In that case, the layer won't be created at all. &lt;br />
<span class='line'> 81</span>  * You can obtain the layers (cc.TMXLayer objects) at runtime by: &lt;br />
<span class='line'> 82</span>  * - map.getChildByTag(tag_number);  // 0=1st layer, 1=2nd layer, 2=3rd layer, etc...&lt;br />
<span class='line'> 83</span>  * - map.getLayer(name_of_the_layer); &lt;/p>
<span class='line'> 84</span>  *
<span class='line'> 85</span>  * &lt;p>Each object group is created using a cc.TMXObjectGroup which is a subclass of cc.MutableArray.&lt;br />
<span class='line'> 86</span>  * You can obtain the object groups at runtime by: &lt;br />
<span class='line'> 87</span>  * - map.getObjectGroup(name_of_the_object_group); &lt;/p>
<span class='line'> 88</span>  *
<span class='line'> 89</span>  * &lt;p>Each object is a cc.TMXObject.&lt;/p>
<span class='line'> 90</span>  *
<span class='line'> 91</span>  * &lt;p>Each property is stored as a key-value pair in an cc.MutableDictionary.&lt;br />
<span class='line'> 92</span>  * You can obtain the properties at runtime by: &lt;/p>
<span class='line'> 93</span>  *
<span class='line'> 94</span>  * &lt;p>map.getProperty(name_of_the_property); &lt;br />
<span class='line'> 95</span>  * layer.getProperty(name_of_the_property); &lt;br />
<span class='line'> 96</span>  * objectGroup.getProperty(name_of_the_property); &lt;br />
<span class='line'> 97</span>  * object.getProperty(name_of_the_property);&lt;/p>
<span class='line'> 98</span>  * @class
<span class='line'> 99</span>  * @extends cc.Node
<span class='line'>100</span>  * @param {String} tmxFile tmxFile fileName or content string
<span class='line'>101</span>  * @param {String} resourcePath   If tmxFile is a file name ,it is not required.If tmxFile is content string ,it is must required.
<span class='line'>102</span> 
<span class='line'>103</span>  *
<span class='line'>104</span>  * @property {Array}    properties      - Properties from the map. They can be added using tilemap editors
<span class='line'>105</span>  * @property {Number}   mapOrientation  - Map orientation
<span class='line'>106</span>  * @property {Array}    objectGroups    - Object groups of the map
<span class='line'>107</span>  * @property {Number}   mapWidth        - Width of the map
<span class='line'>108</span>  * @property {Number}   mapHeight       - Height of the map
<span class='line'>109</span>  * @property {Number}   tileWidth       - Width of a tile
<span class='line'>110</span>  * @property {Number}   tileHeight      - Height of a tile
<span class='line'>111</span>  *
<span class='line'>112</span>  * @example
<span class='line'>113</span>  * //example
<span class='line'>114</span>  * 1.
<span class='line'>115</span>  * //create a TMXTiledMap with file name
<span class='line'>116</span>  * var tmxTiledMap = new cc.TMXTiledMap("res/orthogonal-test1.tmx");
<span class='line'>117</span>  * 2.
<span class='line'>118</span>  * //create a TMXTiledMap with content string and resource path
<span class='line'>119</span>  * var resources = "res/TileMaps";
<span class='line'>120</span>  * var filePath = "res/TileMaps/orthogonal-test1.tmx";
<span class='line'>121</span>  * var xmlStr = cc.loader.getRes(filePath);
<span class='line'>122</span>  * var tmxTiledMap = new cc.TMXTiledMap(xmlStr, resources);
<span class='line'>123</span>  */</span><span class="WHIT">
<span class='line'>124</span> </span><span class="NAME">cc.TMXTiledMap</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.Node.extend</span><span class="PUNC">(</span><span class="COMM">/** @lends cc.TMXTiledMap# */</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>125</span> </span><span class="WHIT">	</span><span class="NAME">properties</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>126</span> </span><span class="WHIT">	</span><span class="NAME">mapOrientation</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>127</span> </span><span class="WHIT">	</span><span class="NAME">objectGroups</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>128</span> 
<span class='line'>129</span> </span><span class="WHIT">    </span><span class="COMM">//the map's size property measured in tiles</span><span class="WHIT">
<span class='line'>130</span> </span><span class="WHIT">    </span><span class="NAME">_mapSize</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>131</span> </span><span class="WHIT">    </span><span class="NAME">_tileSize</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>132</span> </span><span class="WHIT">    </span><span class="COMM">//tile properties</span><span class="WHIT">
<span class='line'>133</span> </span><span class="WHIT">    </span><span class="NAME">_tileProperties</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>134</span> </span><span class="WHIT">    </span><span class="NAME">_className</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="STRN">"TMXTiledMap"</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>135</span> 
<span class='line'>136</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>137</span>      * Creates a TMX Tiled Map with a TMX file  or content string. &lt;br/>
<span class='line'>138</span>      * Constructor of cc.TMXTiledMap
<span class='line'>139</span>      * @param {String} tmxFile tmxFile fileName or content string
<span class='line'>140</span>      * @param {String} resourcePath   If tmxFile is a file name ,it is not required.If tmxFile is content string ,it is must required.
<span class='line'>141</span>      */</span><span class="WHIT">
<span class='line'>142</span> </span><span class="WHIT">    </span><span class="NAME">ctor</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="PUNC">(</span><span class="NAME">tmxFile</span><span class="PUNC">,</span><span class="NAME">resourcePath</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>143</span> </span><span class="WHIT">        </span><span class="NAME">cc.Node.prototype.ctor.call</span><span class="PUNC">(</span><span class="KEYW">this</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>144</span> </span><span class="WHIT">        </span><span class="NAME">this._mapSize</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.size</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>145</span> </span><span class="WHIT">        </span><span class="NAME">this._tileSize</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.size</span><span class="PUNC">(</span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>146</span> 
<span class='line'>147</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="NAME">resourcePath</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="NAME">undefined</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>148</span> </span><span class="WHIT">            </span><span class="NAME">this.initWithXML</span><span class="PUNC">(</span><span class="NAME">tmxFile</span><span class="PUNC">,</span><span class="NAME">resourcePath</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>149</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="KEYW">else</span><span class="WHIT"> </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="NAME">tmxFile</span><span class="WHIT"> </span><span class="PUNC">!==</span><span class="WHIT"> </span><span class="NAME">undefined</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>150</span> </span><span class="WHIT">            </span><span class="NAME">this.initWithTMXFile</span><span class="PUNC">(</span><span class="NAME">tmxFile</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>151</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>152</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>153</span> 
<span class='line'>154</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>155</span>      * Gets the map size.
<span class='line'>156</span>      * @return {cc.Size}
<span class='line'>157</span>      */</span><span class="WHIT">
<span class='line'>158</span> </span><span class="WHIT">    </span><span class="NAME">getMapSize</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>159</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">cc.size</span><span class="PUNC">(</span><span class="NAME">this._mapSize.width</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._mapSize.height</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>160</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>161</span> 
<span class='line'>162</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>163</span>      * Set the map size.
<span class='line'>164</span>      * @param {cc.Size} Var
<span class='line'>165</span>      */</span><span class="WHIT">
<span class='line'>166</span> </span><span class="WHIT">    </span><span class="NAME">setMapSize</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">Var</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>167</span> </span><span class="WHIT">        </span><span class="NAME">this._mapSize.width</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">Var.width</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>168</span> </span><span class="WHIT">        </span><span class="NAME">this._mapSize.height</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">Var.height</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>169</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>170</span> 
<span class='line'>171</span> </span><span class="WHIT">	</span><span class="NAME">_getMapWidth</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>172</span> </span><span class="WHIT">		</span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._mapSize.width</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>173</span> </span><span class="WHIT">	</span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>174</span> </span><span class="WHIT">	</span><span class="NAME">_setMapWidth</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">width</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>175</span> </span><span class="WHIT">		</span><span class="NAME">this._mapSize.width</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">width</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>176</span> </span><span class="WHIT">	</span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>177</span> </span><span class="WHIT">	</span><span class="NAME">_getMapHeight</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>178</span> </span><span class="WHIT">		</span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._mapSize.height</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>179</span> </span><span class="WHIT">	</span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>180</span> </span><span class="WHIT">	</span><span class="NAME">_setMapHeight</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">height</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>181</span> </span><span class="WHIT">		</span><span class="NAME">this._mapSize.height</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">height</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>182</span> </span><span class="WHIT">	</span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>183</span> 
<span class='line'>184</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>185</span>      * Gets the tile size.
<span class='line'>186</span>      * @return {cc.Size}
<span class='line'>187</span>      */</span><span class="WHIT">
<span class='line'>188</span> </span><span class="WHIT">    </span><span class="NAME">getTileSize</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>189</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">cc.size</span><span class="PUNC">(</span><span class="NAME">this._tileSize.width</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">this._tileSize.height</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>190</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>191</span> 
<span class='line'>192</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>193</span>      * Set the tile size
<span class='line'>194</span>      * @param {cc.Size} Var
<span class='line'>195</span>      */</span><span class="WHIT">
<span class='line'>196</span> </span><span class="WHIT">    </span><span class="NAME">setTileSize</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">Var</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>197</span> </span><span class="WHIT">        </span><span class="NAME">this._tileSize.width</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">Var.width</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>198</span> </span><span class="WHIT">        </span><span class="NAME">this._tileSize.height</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">Var.height</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>199</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>200</span> 
<span class='line'>201</span> </span><span class="WHIT">	</span><span class="NAME">_getTileWidth</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>202</span> </span><span class="WHIT">		</span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._tileSize.width</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>203</span> </span><span class="WHIT">	</span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>204</span> </span><span class="WHIT">	</span><span class="NAME">_setTileWidth</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">width</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>205</span> </span><span class="WHIT">		</span><span class="NAME">this._tileSize.width</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">width</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>206</span> </span><span class="WHIT">	</span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>207</span> </span><span class="WHIT">	</span><span class="NAME">_getTileHeight</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>208</span> </span><span class="WHIT">		</span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._tileSize.height</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>209</span> </span><span class="WHIT">	</span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>210</span> </span><span class="WHIT">	</span><span class="NAME">_setTileHeight</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">height</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>211</span> </span><span class="WHIT">		</span><span class="NAME">this._tileSize.height</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">height</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>212</span> </span><span class="WHIT">	</span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>213</span> 
<span class='line'>214</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>215</span>      * map orientation
<span class='line'>216</span>      * @return {Number}
<span class='line'>217</span>      */</span><span class="WHIT">
<span class='line'>218</span> </span><span class="WHIT">    </span><span class="NAME">getMapOrientation</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>219</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this.mapOrientation</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>220</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>221</span> 
<span class='line'>222</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>223</span>      * map orientation
<span class='line'>224</span>      * @param {Number} Var
<span class='line'>225</span>      */</span><span class="WHIT">
<span class='line'>226</span> </span><span class="WHIT">    </span><span class="NAME">setMapOrientation</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">Var</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>227</span> </span><span class="WHIT">        </span><span class="NAME">this.mapOrientation</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">Var</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>228</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>229</span> 
<span class='line'>230</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>231</span>      * object groups
<span class='line'>232</span>      * @return {Array}
<span class='line'>233</span>      */</span><span class="WHIT">
<span class='line'>234</span> </span><span class="WHIT">    </span><span class="NAME">getObjectGroups</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>235</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this.objectGroups</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>236</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>237</span> 
<span class='line'>238</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>239</span>      * object groups
<span class='line'>240</span>      * @param {Array} Var
<span class='line'>241</span>      */</span><span class="WHIT">
<span class='line'>242</span> </span><span class="WHIT">    </span><span class="NAME">setObjectGroups</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">Var</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>243</span> </span><span class="WHIT">        </span><span class="NAME">this.objectGroups</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">Var</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>244</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>245</span> 
<span class='line'>246</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>247</span>      * Gets the properties
<span class='line'>248</span>      * @return {object}
<span class='line'>249</span>      */</span><span class="WHIT">
<span class='line'>250</span> </span><span class="WHIT">    </span><span class="NAME">getProperties</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>251</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this.properties</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>252</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>253</span> 
<span class='line'>254</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>255</span>      * Set the properties
<span class='line'>256</span>      * @param {object} Var
<span class='line'>257</span>      */</span><span class="WHIT">
<span class='line'>258</span> </span><span class="WHIT">    </span><span class="NAME">setProperties</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">Var</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>259</span> </span><span class="WHIT">        </span><span class="NAME">this.properties</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">Var</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>260</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>261</span> 
<span class='line'>262</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>263</span>      * Initializes the instance of cc.TMXTiledMap with tmxFile
<span class='line'>264</span>      * @param {String} tmxFile
<span class='line'>265</span>      * @return {Boolean} Whether the initialization was successful.
<span class='line'>266</span>      * @example
<span class='line'>267</span>      * //example
<span class='line'>268</span>      * var map = new cc.TMXTiledMap()
<span class='line'>269</span>      * map.initWithTMXFile("hello.tmx");
<span class='line'>270</span>      */</span><span class="WHIT">
<span class='line'>271</span> </span><span class="WHIT">    </span><span class="NAME">initWithTMXFile</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">tmxFile</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>272</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="PUNC">!</span><span class="NAME">tmxFile</span><span class="WHIT"> </span><span class="PUNC">||</span><span class="WHIT"> </span><span class="NAME">tmxFile.length</span><span class="WHIT"> </span><span class="PUNC">==</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>273</span> </span><span class="WHIT">            </span><span class="KEYW">throw</span><span class="WHIT"> </span><span class="STRN">"cc.TMXTiledMap.initWithTMXFile(): tmxFile should be non-null or non-empty string."</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>274</span> </span><span class="WHIT">	    </span><span class="NAME">this.width</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>275</span> </span><span class="WHIT">	    </span><span class="NAME">this.height</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>276</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">mapInfo</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.TMXMapInfo.create</span><span class="PUNC">(</span><span class="NAME">tmxFile</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>277</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">!</span><span class="NAME">mapInfo</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>278</span> </span><span class="WHIT">            </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>279</span> 
<span class='line'>280</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locTilesets</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">mapInfo.getTilesets</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>281</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="PUNC">!</span><span class="NAME">locTilesets</span><span class="WHIT"> </span><span class="PUNC">||</span><span class="WHIT"> </span><span class="NAME">locTilesets.length</span><span class="WHIT"> </span><span class="PUNC">===</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>282</span> </span><span class="WHIT">            </span><span class="NAME">cc.log</span><span class="PUNC">(</span><span class="STRN">"cc.TMXTiledMap.initWithTMXFile(): Map not found. Please check the filename."</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>283</span> </span><span class="WHIT">        </span><span class="NAME">this._buildWithMapInfo</span><span class="PUNC">(</span><span class="NAME">mapInfo</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>284</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>285</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>286</span> 
<span class='line'>287</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>288</span>      * Initializes the instance of cc.TMXTiledMap with tmxString
<span class='line'>289</span>      * @param {String} tmxString
<span class='line'>290</span>      * @param {String} resourcePath
<span class='line'>291</span>      * @return {Boolean} Whether the initialization was successful.
<span class='line'>292</span>      */</span><span class="WHIT">
<span class='line'>293</span> </span><span class="WHIT">    </span><span class="NAME">initWithXML</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="PUNC">(</span><span class="NAME">tmxString</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">resourcePath</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>294</span> </span><span class="WHIT">        </span><span class="NAME">this.width</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>295</span> </span><span class="WHIT">	    </span><span class="NAME">this.height</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>296</span> 
<span class='line'>297</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">mapInfo</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.TMXMapInfo.create</span><span class="PUNC">(</span><span class="NAME">tmxString</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">resourcePath</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>298</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locTilesets</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">mapInfo.getTilesets</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>299</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="PUNC">!</span><span class="NAME">locTilesets</span><span class="WHIT"> </span><span class="PUNC">||</span><span class="WHIT"> </span><span class="NAME">locTilesets.length</span><span class="WHIT"> </span><span class="PUNC">===</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>300</span> </span><span class="WHIT">            </span><span class="NAME">cc.log</span><span class="PUNC">(</span><span class="STRN">"cc.TMXTiledMap.initWithXML(): Map not found. Please check the filename."</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>301</span> </span><span class="WHIT">        </span><span class="NAME">this._buildWithMapInfo</span><span class="PUNC">(</span><span class="NAME">mapInfo</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>302</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">true</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>303</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>304</span> 
<span class='line'>305</span> </span><span class="WHIT">    </span><span class="NAME">_buildWithMapInfo</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">mapInfo</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>306</span> </span><span class="WHIT">        </span><span class="NAME">this._mapSize</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">mapInfo.getMapSize</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>307</span> </span><span class="WHIT">        </span><span class="NAME">this._tileSize</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">mapInfo.getTileSize</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>308</span> </span><span class="WHIT">        </span><span class="NAME">this.mapOrientation</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">mapInfo.orientation</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>309</span> </span><span class="WHIT">        </span><span class="NAME">this.objectGroups</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">mapInfo.getObjectGroups</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>310</span> </span><span class="WHIT">        </span><span class="NAME">this.properties</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">mapInfo.properties</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>311</span> </span><span class="WHIT">        </span><span class="NAME">this._tileProperties</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">mapInfo.getTileProperties</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>312</span> 
<span class='line'>313</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">idx</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>314</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">layers</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">mapInfo.getLayers</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>315</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">layers</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>316</span> </span><span class="WHIT">            </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">layerInfo</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>317</span> </span><span class="WHIT">            </span><span class="KEYW">for</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">len</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">layers.length</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="NAME">len</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="PUNC">++</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>318</span> </span><span class="WHIT">                </span><span class="NAME">layerInfo</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">layers</span><span class="PUNC">[</span><span class="NAME">i</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>319</span> </span><span class="WHIT">                </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">layerInfo</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">layerInfo.visible</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>320</span> </span><span class="WHIT">                    </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">child</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._parseLayer</span><span class="PUNC">(</span><span class="NAME">layerInfo</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">mapInfo</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>321</span> </span><span class="WHIT">                    </span><span class="NAME">this.addChild</span><span class="PUNC">(</span><span class="NAME">child</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">idx</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">idx</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>322</span> </span><span class="WHIT">                    </span><span class="COMM">// update content size with the max size</span><span class="WHIT">
<span class='line'>323</span> </span><span class="WHIT">	                </span><span class="NAME">this.width</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">Math.max</span><span class="PUNC">(</span><span class="NAME">this.width</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">child.width</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>324</span> </span><span class="WHIT">	                </span><span class="NAME">this.height</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">Math.max</span><span class="PUNC">(</span><span class="NAME">this.height</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">child.height</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>325</span> </span><span class="WHIT">                    </span><span class="NAME">idx</span><span class="PUNC">++</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>326</span> </span><span class="WHIT">                </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>327</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>328</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>329</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>330</span> 
<span class='line'>331</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>332</span>      * Return All layers array.
<span class='line'>333</span>      * @returns {Array}
<span class='line'>334</span>      */</span><span class="WHIT">
<span class='line'>335</span> </span><span class="WHIT">    </span><span class="NAME">allLayers</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>336</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">retArr</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="PUNC">[</span><span class="PUNC">]</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">locChildren</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._children</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>337</span> </span><span class="WHIT">        </span><span class="KEYW">for</span><span class="PUNC">(</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">len</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">locChildren.length</span><span class="PUNC">;</span><span class="NAME">i</span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="NAME">len</span><span class="PUNC">;</span><span class="NAME">i</span><span class="PUNC">++</span><span class="PUNC">)</span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>338</span> </span><span class="WHIT">            </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">layer</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">locChildren</span><span class="PUNC">[</span><span class="NAME">i</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>339</span> </span><span class="WHIT">            </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="NAME">layer</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">layer</span><span class="WHIT"> </span><span class="KEYW">instanceof</span><span class="WHIT"> </span><span class="NAME">cc.TMXLayer</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>340</span> </span><span class="WHIT">                </span><span class="NAME">retArr.push</span><span class="PUNC">(</span><span class="NAME">layer</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>341</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>342</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">retArr</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>343</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>344</span> 
<span class='line'>345</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>346</span>      * return the TMXLayer for the specific layer
<span class='line'>347</span>      * @param {String} layerName
<span class='line'>348</span>      * @return {cc.TMXLayer}
<span class='line'>349</span>      */</span><span class="WHIT">
<span class='line'>350</span> </span><span class="WHIT">    </span><span class="NAME">getLayer</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">layerName</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>351</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="PUNC">!</span><span class="NAME">layerName</span><span class="WHIT"> </span><span class="PUNC">||</span><span class="WHIT"> </span><span class="NAME">layerName.length</span><span class="WHIT"> </span><span class="PUNC">===</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>352</span> </span><span class="WHIT">            </span><span class="KEYW">throw</span><span class="WHIT"> </span><span class="STRN">"cc.TMXTiledMap.getLayer(): layerName should be non-null or non-empty string."</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>353</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">locChildren</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._children</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>354</span> </span><span class="WHIT">        </span><span class="KEYW">for</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="NAME">locChildren.length</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="PUNC">++</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>355</span> </span><span class="WHIT">            </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">layer</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">locChildren</span><span class="PUNC">[</span><span class="NAME">i</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>356</span> </span><span class="WHIT">            </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">layer</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">layer.layerName</span><span class="WHIT"> </span><span class="PUNC">==</span><span class="WHIT"> </span><span class="NAME">layerName</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>357</span> </span><span class="WHIT">                </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">layer</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>358</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>359</span> </span><span class="WHIT">        </span><span class="COMM">// layer not found</span><span class="WHIT">
<span class='line'>360</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>361</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>362</span> 
<span class='line'>363</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>364</span>      * Return the TMXObjectGroup for the specific group
<span class='line'>365</span>      * @param {String} groupName
<span class='line'>366</span>      * @return {cc.TMXObjectGroup}
<span class='line'>367</span>      */</span><span class="WHIT">
<span class='line'>368</span> </span><span class="WHIT">    </span><span class="NAME">getObjectGroup</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">groupName</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>369</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="PUNC">(</span><span class="PUNC">!</span><span class="NAME">groupName</span><span class="WHIT"> </span><span class="PUNC">||</span><span class="WHIT"> </span><span class="NAME">groupName.length</span><span class="WHIT"> </span><span class="PUNC">===</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="WHIT">
<span class='line'>370</span> </span><span class="WHIT">            </span><span class="KEYW">throw</span><span class="WHIT"> </span><span class="STRN">"cc.TMXTiledMap.getObjectGroup(): groupName should be non-null or non-empty string."</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>371</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">this.objectGroups</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>372</span> </span><span class="WHIT">            </span><span class="KEYW">for</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="NAME">this.objectGroups.length</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="PUNC">++</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>373</span> </span><span class="WHIT">                </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">objectGroup</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this.objectGroups</span><span class="PUNC">[</span><span class="NAME">i</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>374</span> </span><span class="WHIT">                </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">objectGroup</span><span class="WHIT"> </span><span class="PUNC">&&</span><span class="WHIT"> </span><span class="NAME">objectGroup.groupName</span><span class="WHIT"> </span><span class="PUNC">==</span><span class="WHIT"> </span><span class="NAME">groupName</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>375</span> </span><span class="WHIT">                    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">objectGroup</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>376</span> </span><span class="WHIT">                </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>377</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>378</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>379</span> </span><span class="WHIT">        </span><span class="COMM">// objectGroup not found</span><span class="WHIT">
<span class='line'>380</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>381</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>382</span> 
<span class='line'>383</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>384</span>      * Return the value for the specific property name
<span class='line'>385</span>      * @param {String} propertyName
<span class='line'>386</span>      * @return {String}
<span class='line'>387</span>      */</span><span class="WHIT">
<span class='line'>388</span> </span><span class="WHIT">    </span><span class="NAME">getProperty</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">propertyName</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>389</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this.properties</span><span class="PUNC">[</span><span class="NAME">propertyName.toString</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>390</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>391</span> 
<span class='line'>392</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>393</span>      * Return properties dictionary for tile GID
<span class='line'>394</span>      * @param {Number} GID
<span class='line'>395</span>      * @return {object}
<span class='line'>396</span>      * @deprecated
<span class='line'>397</span>      */</span><span class="WHIT">
<span class='line'>398</span> </span><span class="WHIT">    </span><span class="NAME">propertiesForGID</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">GID</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>399</span> </span><span class="WHIT">        </span><span class="NAME">cc.log</span><span class="PUNC">(</span><span class="STRN">"propertiesForGID is deprecated. Please use getPropertiesForGID instead."</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>400</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this.getPropertiesForGID</span><span class="PUNC">[</span><span class="NAME">GID</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>401</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>402</span> 
<span class='line'>403</span> </span><span class="WHIT">    </span><span class="COMM">/**
<span class='line'>404</span>      * Return properties dictionary for tile GID
<span class='line'>405</span>      * @param {Number} GID
<span class='line'>406</span>      * @return {object}
<span class='line'>407</span>      */</span><span class="WHIT">
<span class='line'>408</span> </span><span class="WHIT">    </span><span class="NAME">getPropertiesForGID</span><span class="PUNC">:</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="PUNC">(</span><span class="NAME">GID</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>409</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">this._tileProperties</span><span class="PUNC">[</span><span class="NAME">GID</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>410</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>411</span> 
<span class='line'>412</span> </span><span class="WHIT">    </span><span class="NAME">_parseLayer</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">layerInfo</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">mapInfo</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>413</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">tileset</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">this._tilesetForLayer</span><span class="PUNC">(</span><span class="NAME">layerInfo</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">mapInfo</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>414</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">layer</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.TMXLayer.create</span><span class="PUNC">(</span><span class="NAME">tileset</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">layerInfo</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">mapInfo</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>415</span> </span><span class="WHIT">        </span><span class="COMM">// tell the layerinfo to release the ownership of the tiles map.</span><span class="WHIT">
<span class='line'>416</span> </span><span class="WHIT">        </span><span class="NAME">layerInfo.ownTiles</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">false</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>417</span> </span><span class="WHIT">        </span><span class="NAME">layer.setupTiles</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>418</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">layer</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>419</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="PUNC">,</span><span class="WHIT">
<span class='line'>420</span> 
<span class='line'>421</span> </span><span class="WHIT">    </span><span class="NAME">_tilesetForLayer</span><span class="PUNC">:</span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">layerInfo</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">mapInfo</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>422</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">size</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">layerInfo._layerSize</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>423</span> </span><span class="WHIT">        </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">tilesets</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">mapInfo.getTilesets</span><span class="PUNC">(</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>424</span> </span><span class="WHIT">        </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">tilesets</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>425</span> </span><span class="WHIT">            </span><span class="KEYW">for</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">tilesets.length</span><span class="WHIT"> </span><span class="PUNC">-</span><span class="WHIT"> </span><span class="NUMB">1</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="WHIT"> </span><span class="PUNC">>=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">i</span><span class="PUNC">--</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>426</span> </span><span class="WHIT">                </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">tileset</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">tilesets</span><span class="PUNC">[</span><span class="NAME">i</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>427</span> </span><span class="WHIT">                </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">tileset</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>428</span> </span><span class="WHIT">                    </span><span class="KEYW">for</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">y</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">y</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="NAME">size.height</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">y</span><span class="PUNC">++</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>429</span> </span><span class="WHIT">                        </span><span class="KEYW">for</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">x</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">x</span><span class="WHIT"> </span><span class="PUNC">&lt;</span><span class="WHIT"> </span><span class="NAME">size.width</span><span class="PUNC">;</span><span class="WHIT"> </span><span class="NAME">x</span><span class="PUNC">++</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>430</span> </span><span class="WHIT">                            </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">pos</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">x</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NAME">size.width</span><span class="WHIT"> </span><span class="PUNC">*</span><span class="WHIT"> </span><span class="NAME">y</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>431</span> </span><span class="WHIT">                            </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">gid</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">layerInfo._tiles</span><span class="PUNC">[</span><span class="NAME">pos</span><span class="PUNC">]</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>432</span> </span><span class="WHIT">                            </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">gid</span><span class="WHIT"> </span><span class="PUNC">!=</span><span class="WHIT"> </span><span class="NUMB">0</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>433</span> </span><span class="WHIT">                                </span><span class="COMM">// Optimization: quick return</span><span class="WHIT">
<span class='line'>434</span> </span><span class="WHIT">                                </span><span class="COMM">// if the layer is invalid (more than 1 tileset per layer) an cc.assert will be thrown later</span><span class="WHIT">
<span class='line'>435</span> </span><span class="WHIT">                                </span><span class="KEYW">if</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="PUNC">(</span><span class="PUNC">(</span><span class="NAME">gid</span><span class="WHIT"> </span><span class="PUNC">&</span><span class="WHIT"> </span><span class="NAME">cc.TMX_TILE_FLIPPED_MASK</span><span class="PUNC">)</span><span class="PUNC">>>></span><span class="NUMB">0</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">>=</span><span class="WHIT"> </span><span class="NAME">tileset.firstGid</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>436</span> </span><span class="WHIT">                                    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="NAME">tileset</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>437</span> </span><span class="WHIT">                                </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>438</span> </span><span class="WHIT">                            </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>439</span> 
<span class='line'>440</span> </span><span class="WHIT">                        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>441</span> </span><span class="WHIT">                    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>442</span> </span><span class="WHIT">                </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>443</span> </span><span class="WHIT">            </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>444</span> </span><span class="WHIT">        </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>445</span> 
<span class='line'>446</span> </span><span class="WHIT">        </span><span class="COMM">// If all the tiles are 0, return empty tileset</span><span class="WHIT">
<span class='line'>447</span> </span><span class="WHIT">        </span><span class="NAME">cc.log</span><span class="PUNC">(</span><span class="STRN">"cocos2d: Warning: TMX Layer "</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="NAME">layerInfo.name</span><span class="WHIT"> </span><span class="PUNC">+</span><span class="WHIT"> </span><span class="STRN">" has no tiles"</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>448</span> </span><span class="WHIT">        </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">null</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>449</span> </span><span class="WHIT">    </span><span class="PUNC">}</span><span class="WHIT">
<span class='line'>450</span> </span><span class="PUNC">}</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>451</span> 
<span class='line'>452</span> </span><span class="KEYW">var</span><span class="WHIT"> </span><span class="NAME">_p</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="NAME">cc.TMXTiledMap.prototype</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>453</span> 
<span class='line'>454</span> </span><span class="COMM">// Extended properties</span><span class="WHIT">
<span class='line'>455</span> </span><span class="COMM">/** @expose */</span><span class="WHIT">
<span class='line'>456</span> </span><span class="NAME">_p.mapWidth</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>457</span> </span><span class="NAME">cc.defineGetterSetter</span><span class="PUNC">(</span><span class="NAME">_p</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="STRN">"mapWidth"</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">_p._getMapWidth</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">_p._setMapWidth</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>458</span> </span><span class="COMM">/** @expose */</span><span class="WHIT">
<span class='line'>459</span> </span><span class="NAME">_p.mapHeight</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>460</span> </span><span class="NAME">cc.defineGetterSetter</span><span class="PUNC">(</span><span class="NAME">_p</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="STRN">"mapHeight"</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">_p._getMapHeight</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">_p._setMapHeight</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>461</span> </span><span class="COMM">/** @expose */</span><span class="WHIT">
<span class='line'>462</span> </span><span class="NAME">_p.tileWidth</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>463</span> </span><span class="NAME">cc.defineGetterSetter</span><span class="PUNC">(</span><span class="NAME">_p</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="STRN">"tileWidth"</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">_p._getTileWidth</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">_p._setTileWidth</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>464</span> </span><span class="COMM">/** @expose */</span><span class="WHIT">
<span class='line'>465</span> </span><span class="NAME">_p.tileHeight</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>466</span> </span><span class="NAME">cc.defineGetterSetter</span><span class="PUNC">(</span><span class="NAME">_p</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="STRN">"tileHeight"</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">_p._getTileHeight</span><span class="PUNC">,</span><span class="WHIT"> </span><span class="NAME">_p._setTileHeight</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>467</span> 
<span class='line'>468</span> 
<span class='line'>469</span> </span><span class="COMM">/**
<span class='line'>470</span>  * Creates a TMX Tiled Map with a TMX file  or content string.
<span class='line'>471</span>  * Implementation cc.TMXTiledMap
<span class='line'>472</span>  * @deprecated since v3.0 please use new cc.TMXTiledMap(tmxFile,resourcePath) instead.
<span class='line'>473</span>  * @param {String} tmxFile tmxFile fileName or content string
<span class='line'>474</span>  * @param {String} resourcePath   If tmxFile is a file name ,it is not required.If tmxFile is content string ,it is must required.
<span class='line'>475</span>  * @return {cc.TMXTiledMap|undefined}
<span class='line'>476</span>  * @example
<span class='line'>477</span>  * //example
<span class='line'>478</span>  * 1.
<span class='line'>479</span>  * //create a TMXTiledMap with file name
<span class='line'>480</span>  * var tmxTiledMap = cc.TMXTiledMap.create("res/orthogonal-test1.tmx");
<span class='line'>481</span>  * 2.
<span class='line'>482</span>  * //create a TMXTiledMap with content string and resource path
<span class='line'>483</span>  * var resources = "res/TileMaps";
<span class='line'>484</span>  * var filePath = "res/TileMaps/orthogonal-test1.tmx";
<span class='line'>485</span>  * var xmlStr = cc.loader.getRes(filePath);
<span class='line'>486</span>  * var tmxTiledMap = cc.TMXTiledMap.create(xmlStr, resources);
<span class='line'>487</span>  */</span><span class="WHIT">
<span class='line'>488</span> </span><span class="NAME">cc.TMXTiledMap.create</span><span class="WHIT"> </span><span class="PUNC">=</span><span class="WHIT"> </span><span class="KEYW">function</span><span class="WHIT"> </span><span class="PUNC">(</span><span class="NAME">tmxFile</span><span class="PUNC">,</span><span class="NAME">resourcePath</span><span class="PUNC">)</span><span class="WHIT"> </span><span class="PUNC">{</span><span class="WHIT">
<span class='line'>489</span> </span><span class="WHIT">    </span><span class="KEYW">return</span><span class="WHIT"> </span><span class="KEYW">new</span><span class="WHIT"> </span><span class="NAME">cc.TMXTiledMap</span><span class="PUNC">(</span><span class="NAME">tmxFile</span><span class="PUNC">,</span><span class="NAME">resourcePath</span><span class="PUNC">)</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>490</span> </span><span class="PUNC">}</span><span class="PUNC">;</span><span class="WHIT">
<span class='line'>491</span> </span></pre></body></html>