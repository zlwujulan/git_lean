#!/bin/sh
if [ $# -lt 1 ] ; then
    echo "FileName to create is required"
    exit 1
fi
FileName="${1}.vue"
if [ -e $FileName ]; then
    echo "file existed"
    exit 1
fi
echo "<template>" > $FileName
echo "" >> $FileName
echo "</template>" >> $FileName
echo "<script>" >> $FileName
echo "export default {" >> $FileName
echo "    data() {" >> $FileName
echo "        return {" >> $FileName
echo "" >> $FileName
echo "        };" >> $FileName
echo "    }," >> $FileName
echo "    methods: {" >> $FileName
echo "" >> $FileName
echo "    }," >> $FileName
echo "    mounted() {}," >> $FileName
echo "    components: {}" >> $FileName
echo "};" >> $FileName
echo "</script>" >> $FileName
echo "<style lang='scss' scoped>" >> $FileName
echo "" >> $FileName
echo "</style>" >> $FileName
exit 0
