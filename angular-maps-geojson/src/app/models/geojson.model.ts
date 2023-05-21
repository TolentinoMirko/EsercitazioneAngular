export class Geometry {
    type: string ="";
    coordinates: any; //non sappiamo se sarà un number[] (Point), number[][] (LineString) o number [][][] (Polygon)
}

export class GeoJson {
        public type: string=""; // adesso con angular bisogna inizializzare tutto le variabili
        public geometry!: Geometry;//il geometry sarà la classe scritta sopra
        public properties?: any
}

export class GeoFeatureCollection
{
    public type: string ="FeatureCollection";
    public features : GeoJson[] = []; //il Geojson (è l'unito con il geometry) sarà quella spra
}


//le coordinate la quale dobbiamo lavorarci si trovano qui
export const GEOJSON = {
    "type": "FeatureCollection",
    "features":
        [
            {
                "type": "Feature",
                "properties": {
                    "id": 0
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                10.29190643953763,
                                45.585867272917127
                            ],
                            [
                                10.291980246987739,
                                45.585614777049322
                            ],
                            [
                                10.291489883738819,
                                45.585574698644159
                            ],
                            [
                                10.29150848781183,
                                45.585216020759951
                            ],
                            [
                                10.291530147069221,
                                45.584989387755023
                            ],
                            [
                                10.29160269389947,
                                45.584639538265961
                            ],
                            [
                                10.29272800226194,
                                45.584733097231101
                            ],
                            [
                                10.296176425727969,
                                45.585385290427048
                            ],
                            [
                                10.296338402118259,
                                45.585075954438388
                            ],
                            [
                                10.296598879103231,
                                45.584637752769929
                            ],
                            [
                                10.2967884955803,
                                45.584233757661863
                            ],
                            [
                                10.29706883517709,
                                45.583951538646488
                            ],
                            [
                                10.29761291115593,
                                45.583225271282593
                            ],
                            [
                                10.298228091618819,
                                45.582525216703417
                            ],
                            [
                                10.29867100821258,
                                45.582034132041883
                            ],
                            [
                                10.298515588663349,
                                45.581968854374082
                            ],
                            [
                                10.298373891637461,
                                45.582226679995969
                            ],
                            [
                                10.29809870136422,
                                45.582437798128133
                            ],
                            [
                                10.29765006303197,
                                45.582269580411669
                            ],
                            [
                                10.2979563013677,
                                45.5819772024957
                            ],
                            [
                                10.29742318049318,
                                45.581717496606608
                            ],
                            [
                                10.29687388811621,
                                45.582185948842387
                            ],
                            [
                                10.296636443948771,
                                45.582604626845807
                            ],
                            [
                                10.295671944018929,
                                45.582211148159267
                            ],
                            [
                                10.295576054636509,
                                45.582339338756263
                            ],
                            [
                                10.29579335249689,
                                45.582475533838313
                            ],
                            [
                                10.29563451080451,
                                45.582731559521541
                            ],
                            [
                                10.294807078449219,
                                45.582567608020241
                            ],
                            [
                                10.29502648617323,
                                45.582079789359483
                            ],
                            [
                                10.29528148408153,
                                45.581707130251303
                            ],
                            [
                                10.294932973565871,
                                45.581595537305013
                            ],
                            [
                                10.29509234683146,
                                45.581362623747957
                            ],
                            [
                                10.29454225810839,
                                45.581079979557423
                            ],
                            [
                                10.29470269368078,
                                45.580893268237638
                            ],
                            [
                                10.294167475408919,
                                45.580541124472639
                            ],
                            [
                                10.294388740110881,
                                45.580134192988282
                            ],
                            [
                                10.293670005401539,
                                45.579680120959353
                            ],
                            [
                                10.29323679575521,
                                45.579465478420133
                            ],
                            [
                                10.292880598709351,
                                45.579735274083077
                            ],
                            [
                                10.292282444728929,
                                45.579510935837192
                            ],
                            [
                                10.29231034543354,
                                45.579291070798213
                            ],
                            [
                                10.291782309735581,
                                45.579250830306393
                            ],
                            [
                                10.29157830626281,
                                45.579692235199708
                            ],
                            [
                                10.2913976745096,
                                45.579717393999431
                            ],
                            [
                                10.291305221340959,
                                45.579995761455663
                            ],
                            [
                                10.291718529716141,
                                45.580060418034023
                            ],
                            [
                                10.291252028229859,
                                45.58126744314518
                            ],
                            [
                                10.29117099545214,
                                45.581326131126303
                            ],
                            [
                                10.29044534591927,
                                45.581288118225359
                            ],
                            [
                                10.29053250981805,
                                45.580778704727528
                            ],
                            [
                                10.290317083340801,
                                45.580723347804927
                            ],
                            [
                                10.290221713552491,
                                45.58087464439015
                            ],
                            [
                                10.289759274933891,
                                45.580822094463507
                            ],
                            [
                                10.290141625109349,
                                45.579535137681383
                            ],
                            [
                                10.29029651383888,
                                45.579105847471062
                            ],
                            [
                                10.29066092571674,
                                45.579194177487629
                            ],
                            [
                                10.291089923505741,
                                45.578507564491417
                            ],
                            [
                                10.29098635127135,
                                45.578300743988812
                            ],
                            [
                                10.290634719025119,
                                45.57805049493259
                            ],
                            [
                                10.290337508827291,
                                45.578019196486451
                            ],
                            [
                                10.290160849376569,
                                45.57821762518806
                            ],
                            [
                                10.289907949226251,
                                45.57868269671873
                            ],
                            [
                                10.28939455070503,
                                45.578561372702247
                            ],
                            [
                                10.288717798741541,
                                45.578499679567223
                            ],
                            [
                                10.288475342011189,
                                45.578553593689257
                            ],
                            [
                                10.288320561322241,
                                45.578516034151171
                            ],
                            [
                                10.28797212474889,
                                45.578386918458747
                            ],
                            [
                                10.28787708700062,
                                45.578129723878412
                            ],
                            [
                                10.28838428189083,
                                45.577403990376077
                            ],
                            [
                                10.28833040928374,
                                45.576997633624828
                            ],
                            [
                                10.28833873409425,
                                45.57638709257288
                            ],
                            [
                                10.287791197401679,
                                45.576322831916677
                            ],
                            [
                                10.28770725494641,
                                45.576550739212649
                            ],
                            [
                                10.288054783633511,
                                45.576640735081867
                            ],
                            [
                                10.28792913771164,
                                45.576994332793653
                            ],
                            [
                                10.287899290676959,
                                45.577151193858803
                            ],
                            [
                                10.28761932312652,
                                45.577091740433673
                            ],
                            [
                                10.287473468056421,
                                45.577430462682507
                            ],
                            [
                                10.2877405752361,
                                45.577520816937138
                            ],
                            [
                                10.2873502080843,
                                45.577994791853698
                            ],
                            [
                                10.28784003307163,
                                45.578458843351832
                            ],
                            [
                                10.288201580196819,
                                45.578673901520247
                            ],
                            [
                                10.2883634558314,
                                45.578705412633482
                            ],
                            [
                                10.289230613726239,
                                45.578865117283733
                            ],
                            [
                                10.288870321568719,
                                45.579857154289712
                            ],
                            [
                                10.288663272303589,
                                45.580526802852617
                            ],
                            [
                                10.28859993395085,
                                45.580458186474317
                            ],
                            [
                                10.28842562197625,
                                45.580399486303243
                            ],
                            [
                                10.288434613574561,
                                45.580252060356109
                            ],
                            [
                                10.287976235316609,
                                45.580196563585289
                            ],
                            [
                                10.28764215469049,
                                45.580174339145323
                            ],
                            [
                                10.28766407766375,
                                45.580052758713769
                            ],
                            [
                                10.287465667010119,
                                45.580020320901468
                            ],
                            [
                                10.287231017414101,
                                45.58002296566039
                            ],
                            [
                                10.287172010716491,
                                45.580144963932028
                            ],
                            [
                                10.286749503853271,
                                45.580037055685608
                            ],
                            [
                                10.28646803267748,
                                45.580656180823929
                            ],
                            [
                                10.28572120219898,
                                45.580412007301852
                            ],
                            [
                                10.28515616656256,
                                45.58014823427532
                            ],
                            [
                                10.28487877425289,
                                45.580663820769949
                            ],
                            [
                                10.284751201755849,
                                45.580957693280901
                            ],
                            [
                                10.28467668023576,
                                45.581222653653327
                            ],
                            [
                                10.28641625296294,
                                45.581552103544411
                            ],
                            [
                                10.28754944453358,
                                45.581784599948101
                            ],
                            [
                                10.287502215353751,
                                45.582068131327148
                            ],
                            [
                                10.287411805649811,
                                45.583399219089138
                            ],
                            [
                                10.287680812903011,
                                45.583419782692793
                            ],
                            [
                                10.287607595830639,
                                45.583741322926187
                            ],
                            [
                                10.287487217914631,
                                45.583761555877409
                            ],
                            [
                                10.28737481509944,
                                45.58413070997883
                            ],
                            [
                                10.28749584230337,
                                45.584138784208072
                            ],
                            [
                                10.2873349134679,
                                45.584734892242821
                            ],
                            [
                                10.28787811662054,
                                45.585002328960194
                            ],
                            [
                                10.288578784292501,
                                45.585107610889928
                            ],
                            [
                                10.288554307914319,
                                45.585211652093662
                            ],
                            [
                                10.288930833025519,
                                45.585235718936829
                            ],
                            [
                                10.288882744400439,
                                45.585481506726623
                            ],
                            [
                                10.28856504737325,
                                45.5854159458273
                            ],
                            [
                                10.288459814501531,
                                45.585728796307407
                            ],
                            [
                                10.28829898933099,
                                45.586011304974917
                            ],
                            [
                                10.288660094426669,
                                45.586053076938008
                            ],
                            [
                                10.28878139492909,
                                45.585780415270349
                            ],
                            [
                                10.289118375288229,
                                45.585793718778547
                            ],
                            [
                                10.289088999585699,
                                45.585927974052957
                            ],
                            [
                                10.28930836830274,
                                45.585942604338918
                            ],
                            [
                                10.289305892941311,
                                45.586011022599038
                            ],
                            [
                                10.28952154571569,
                                45.586039925865038
                            ],
                            [
                                10.2894874510283,
                                45.586145752726019
                            ],
                            [
                                10.289955307844149,
                                45.586206003174418
                            ],
                            [
                                10.29085169106343,
                                45.586326222749619
                            ],
                            [
                                10.29169484633495,
                                45.58647551814709
                            ],
                            [
                                10.291717508665929,
                                45.586307493566309
                            ],
                            [
                                10.29181870896339,
                                45.586091961967448
                            ],
                            [
                                10.29190643953763,
                                45.585867272917127
                            ]
                        ]
                    ]
                }
            },

            {
                "type": "Feature",
                "properties": { "id": 1 },
                "geometry":
                {
                    "type": "Polygon", "coordinates":
                        [
                            [
                                [
                                    9.02657833507687,
                                    45.512051524024308
                                ],
                                [
                                    9.026164618028195,
                                    45.511898674596679
                                ],
                                [
                                    9.026816853670274,
                                    45.511025983986073
                                ],
                                [
                                    9.026448869481893,
                                    45.510863954543538
                                ],
                                [
                                    9.027086387963509,
                                    45.509958337989652
                                ],
                                [
                                    9.026760836588364,
                                    45.509793779157228
                                ],
                                [
                                    9.026996314327706,
                                    45.509546577321203
                                ],
                                [
                                    9.026208171447257,
                                    45.509540216200733
                                ],
                                [
                                    9.026346048442743,
                                    45.509308320035153
                                ],
                                [
                                    9.026533611320152,
                                    45.50902717369479
                                ],
                                [
                                    9.026258569133168,
                                    45.508933813505173
                                ],
                                [
                                    9.026026457109522,
                                    45.508863373965752
                                ],
                                [
                                    9.025955779307488,
                                    45.508874376734852
                                ],
                                [
                                    9.025912528751384,
                                    45.50889330047066
                                ],
                                [
                                    9.025840895481643,
                                    45.50899573699877
                                ],
                                [
                                    9.02558682282878,
                                    45.509349784956157
                                ],
                                [
                                    9.025510772518748,
                                    45.509309320625121
                                ],
                                [
                                    9.024937847712602,
                                    45.509108238472137
                                ],
                                [
                                    9.025237959577334,
                                    45.508454349430437
                                ],
                                [
                                    9.021137033701963,
                                    45.508015324584633
                                ],
                                [
                                    9.021122892263394,
                                    45.508057191112478
                                ],
                                [
                                    9.020888957989515,
                                    45.509200502253897
                                ],
                                [
                                    9.02071972214784,
                                    45.509200533076381
                                ],
                                [
                                    9.020473710220728,
                                    45.50917453018382
                                ],
                                [
                                    9.01941271370664,
                                    45.50906232195593
                                ],
                                [
                                    9.01907926324934,
                                    45.509027058899541
                                ],
                                [
                                    9.018988146196726,
                                    45.509072790437912
                                ],
                                [
                                    9.019561060862525,
                                    45.509310494420149
                                ],
                                [
                                    9.020628822040818,
                                    45.509840786381567
                                ],
                                [
                                    9.020452714028599,
                                    45.509983572051851
                                ],
                                [
                                    9.021227739415709,
                                    45.510439915441012
                                ],
                                [
                                    9.020767057512392,
                                    45.510944064430078
                                ],
                                [
                                    9.020114406774972,
                                    45.511637268443167
                                ],
                                [
                                    9.019922584612372,
                                    45.51222236490608
                                ],
                                [
                                    9.02097254562222,
                                    45.512672228516173
                                ],
                                [
                                    9.02009944855989,
                                    45.514032382581313
                                ],
                                [
                                    9.020076859020923,
                                    45.514067559043568
                                ],
                                [
                                    9.021587809037007,
                                    45.514652346086088
                                ],
                                [
                                    9.02213835189608,
                                    45.514701736564632
                                ],
                                [
                                    9.022185182990357,
                                    45.514706243303543
                                ],
                                [
                                    9.023532738728793,
                                    45.512905750738959
                                ],
                                [
                                    9.023942454181082,
                                    45.512986684034132
                                ],
                                [
                                    9.024697868159302,
                                    45.513166532464169
                                ],
                                [
                                    9.02541444295942,
                                    45.513202395678533
                                ],
                                [
                                    9.026028809796005,
                                    45.512887217951707
                                ],
                                [
                                    9.026451034188591,
                                    45.512293043632297
                                ],
                                [
                                    9.02657833507687,
                                    45.512051524024308
                                ]
                            ]
                        ]
                }
            }]
}